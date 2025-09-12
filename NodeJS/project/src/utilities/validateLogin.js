const {isEmail} = require("validator")

function validateLogin(credentials){
    const {mail , password} = credentials
    if(isEmail(mail)==false || password==null){
        throw new Error("Faulty Credentilas")
    }
   

    return {mail , password};
}

module.exports = {
    validateLogin
}