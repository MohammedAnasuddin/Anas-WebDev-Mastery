import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SERVER_URL } from "./utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import {addUser} from './utils/redux/userSlice'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//---------------------------------------




function Body() {
  const dispatch = useDispatch()  
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchUser = async ()=>{
      const currentPath = window.location.pathname;
      try {
        const profile_res = await axios.get(SERVER_URL+"/profile", {
          withCredentials:true
        });
        // The Navbar and Profile components expect the user object to be nested under a `data` property.
        dispatch(addUser({ data: profile_res.data }));
        // If user is logged in and on login/root page, redirect to home
        if (currentPath === "/login" || currentPath === "/") {
          navigate("/home");
        }
      } catch (error) {
        console.log("Error Fetching User: "+error.message);
        // If user is not logged in and not on login page, redirect to login
        if (currentPath !== "/login") {
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [dispatch, navigate]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-base-200">
        {loading ? (
          <div className="hero h-full">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Body;
