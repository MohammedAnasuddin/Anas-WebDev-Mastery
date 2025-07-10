import Team_Member from "./Team_Member"
import { Outlet } from "react-router"
export const About = () =>{
    return (
           <div>
               <h2>Meet our Team</h2>
              <div style={{display:"flex"}}>
              <Team_Member/>
              <Team_Member/>
              <Team_Member/>
              <Team_Member/>
              <Outlet/>
        
              </div>
           </div>
        )
}