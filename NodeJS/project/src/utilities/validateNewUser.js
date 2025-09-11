const validator = require("validator")
function validateNewUser(req){
const {firstName,lastName,mail,password,gender,about} = req;

        if(firstName == null ||
            firstName.length == 0 ||
            typeof firstName != typeof "" 
        ) throw new Error("FirstName is not valid");

        if(typeof lastName != typeof "ln"  ) 
            throw new Error("LastName is not valid");

        if(typeof about != typeof "" ) 
            throw new Error("About is not valid");
        
        if(validator.isEmail(mail) == false)
            throw new Error("Provided Email is Wrong");
        
        if(validator.isStrongPassword(password) == false)
            throw new Error("Use a Strong Password");
          
        return {firstName,lastName,mail,password,gender,about}
}

module.exports = {
    validateNewUser
}