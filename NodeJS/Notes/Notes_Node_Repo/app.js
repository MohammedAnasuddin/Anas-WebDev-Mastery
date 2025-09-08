const crypto = require("node:crypto")



crypto.pbkdf2("psswd", "salt", 100000, 64, "sha512", (err,key)=>{
    console.log("Key form async: ", key);
})


console.log("Key form Sync",crypto.pbkdf2Sync("psswd", "salt", 1000000, 64, "sha512"))

