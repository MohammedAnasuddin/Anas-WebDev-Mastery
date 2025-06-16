//. JSON - JavaScript Object Notation
//> JSON is a lightweight text format for data-interchange/Sharing.
//-  easy for humans to read and write ,  easy for machines to parse and generate
//> Based on ECMA-262 (1999)
//> Perks:  language independent , uses conventions that are familiar to programmers 


//> JSON is a syntax for serializing data.
        //- Serializing: serialization is the process of translating a data into a format 
        //- that can be stored or transmitted and **reconstructed later**.

//x JSON Cannot be invoked(used) as Object 
//x "new" cannot be used with JSON, since JSON does not have it's own constructor.

//> All the Properties and methods of JSON are static.
    //- i.e, properties and methods can be directly accessed, no need create instance of JSON

//- JSON can only store: strings, numbers, true, false, null, arrays, or another JSON object.

//. Differences b/n JS and JSON
    //> 1. JSON Keys must be always double-quoted.
    //x 2. JSON does not support trailing commas.
            //- Trailing commas are the extra final commas added by JS devs to easily add upcoming properties without modifying the previous line.
            //- If a comma already exist they can edit the new line. 
    //x 3. JSON does not allow zeroes in front of a number. 
    //x 4. Nan and Infinity cannot be used as values
    //> 5. JSON has no support for undefined.
    //> 6. Comments cannot be added din JSON
            //- Hence YAML is used which as Comments support
    //> 7. In JSON, "__proto__" is a normal property key. In an object literal, it sets the object's prototype.

// Note: Every JSON can be converted into JS Object.
        //x vice-vers is not possible
//  {
//     "valid": 25,
//     "in-valid": 0025,
//     "not-possible_1": NaN,
//     "not-possible_2": Infinity,
//     "not-possible_3": undefined,
//     "comments-possible": false,
//  }   

