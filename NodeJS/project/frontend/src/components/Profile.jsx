import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {useState} from "react"

function Profile() {
 const currentUser = useSelector((store) => store.user);
const { firstName, lastName, age, about,photoURL} = currentUser.data;

const [stFirstName, setSTFirstName] = useState(firstName)
const [stLastName, setSTLastName] =   useState(lastName)
const [stPhotoURL, setSTPhotoURL] = useState(photoURL)
const [stAge, setSTAge] = useState(age)
const [stAbout, setSTAbout] = useState(about)


  // If user is not logged in or data is malformed, redirect to login.
  if (!currentUser?.data) {
    return <Navigate to="/login" />;
  }
  // Assuming the user data is nested under a 'data' property based on Navbar.jsx

  return (
    <div className="L1 p-4 grid grid-cols-1 md:grid-cols-2 gap-4 min-h-96">
      <div className="L2-1-forms my-2 border border-sky-400 flex-col space-y-2 space-x-1 size-grid ">
        <input type="text" placeholder="First Name" className="input w-5/12" />
        <input type="text" placeholder="Last Name" className="input  w-5/12" />
            <input
                type="number"
                className="input validator  w-3/12"
                required
                placeholder="Age"
                min="18"
              />
        <input type="text" placeholder="Photo URL" className="input  w-9/12" />
        <textarea className="textarea flex-grow  w-full h-4/6 " placeholder="About"></textarea>      
      </div>
      <div className="L2-2   preview_card border border-sky-400">L2-2</div>
      <div className="L2-3  md:col-span-2 flex justify-center items-center">
        <button className="btn btn-primary">Update Profile</button>
      </div>
    </div>
  );
}

export default Profile;