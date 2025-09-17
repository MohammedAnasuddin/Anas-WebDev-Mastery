const checkFields = require("./checkFields")


function validateEditRequest(edits){
    const allowedEdits = ["about","firstName","lastName"]

    const canEdit = checkFields(edits,allowedEdits)

    return canEdit


}

module.exports = validateEditRequest;