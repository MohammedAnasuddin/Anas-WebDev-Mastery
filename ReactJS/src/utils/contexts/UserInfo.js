import { createContext } from "react";

 const UserInfo = createContext({
    name: "guest",
    id:"-1"
})
// console.log("User Context Object: ",UserInfo)

export default UserInfo