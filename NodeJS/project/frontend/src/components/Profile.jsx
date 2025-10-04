import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {useState} from "react"
import {useImmer} from "use-immer";
import ProfileCard from "./ProfileCard";
import axios from "axios";
import {SERVER_URL} from "../utils/constants";

function Profile() {
 const currentUser = useSelector((store) => store.user);
const { firstName, lastName, age, about,photoURL, gender} = currentUser.data;

const [formData,setFormData] = useImmer({
    stFirstName: firstName,
    stLastName: lastName,
    stAge: age,
    stAbout: about,
    stPhotoURL: photoURL,
    gender:gender
})

const previewCardProps = {
  firstName: formData.stFirstName,
  lastName: formData.stLastName,
  age: formData.stAge,
  about : formData.stAbout,
  photoURL:  formData.stPhotoURL,
  gender:gender
}

const updateFormData= (property,new_value)=>{
  setFormData((draft)=>{
    draft[property] = new_value;
  })
}
 

const handleChange = (e)=>{
  const {name,value} = e.target;
  const formPropertyKey = "st"+name;
  updateFormData(formPropertyKey,value)
}

const handleClick = async ()=>{
    await axios.patch(SERVER_URL+"/updateUser", {
      "firstName": formData.stFirstName,
      "lastName": formData.stLastName,
      "age": formData.stAge,
      "about" : formData.stAbout,
      "photoURL":  formData.stPhotoURL,
}, {withCredentials:true})
}
  // If user is not logged in or data is malformed, redirect to login.
  if (!currentUser?.data) {
    return <Navigate to="/login" />;
  }
  // Assuming the user data is nested under a 'data' property based on Navbar.jsx

  return (
    <div className="L1 p-4 grid grid-cols-1 md:grid-cols-2 gap-4   ">
      {/* Use flex, flex-col, and gap for consistent vertical spacing */}
      <div className="L2-1-forms  my-2 border border-sky-400 p-4 flex flex-col gap-4 ">
        {/* Use flex and gap for consistent horizontal spacing */}
        <div className="flex flex-col md:flex-row gap-4">
          <input type="text" name="FirstName" placeholder="First Name" className="input w-full md:w-1/2" value={formData.stFirstName} onChange={handleChange} />
          <input type="text" name="LastName" placeholder="Last Name" className="input w-full md:w-1/2" value={formData.stLastName} onChange={handleChange} />
        </div>
        <div className="flex flex-row gap-4">
          <input type="number" name="Age" className="input w-1/4" required placeholder="Age" min="18" value={formData.stAge} onChange={handleChange} />
          <input type="text" name="PhotoURL" placeholder="Photo URL" className="input w-3/4" value={formData.stPhotoURL} onChange={handleChange} />
        </div>
        {/* Let the textarea grow naturally */}
        <textarea className="textarea w-full min-h-48" name="About" placeholder="About" value={formData.stAbout} onChange={handleChange} ></textarea>
      
        
     
      </div>


      <div className="L2-2 preview_card  border border-sky-400  flex justify-center items-center ">
         <ProfileCard details={previewCardProps}/>
      </div>

       <div className="L2-3  flex justify-center items-start w-screen ">
         <button className="btn btn-primary max-w-4/12" onClick={handleClick}>Update Profile</button>
      </div>

     
    </div>
  );
}

export default Profile;