function checkFields(req,allowed){
    const areAllowed = Object.keys(req).every((key)=>allowed.includes(key))

    //- Every Key of req should be present in allowed
    return areAllowed;
}


module.exports = checkFields;