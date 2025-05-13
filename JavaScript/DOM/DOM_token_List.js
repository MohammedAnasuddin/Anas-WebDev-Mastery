//. Token
//> a single string value (especially from the attributes like class)
//x a token cannot contain a whitespace

//.DOMtokenList
// > collection of space-separated tokens—usually 
// > used to manipulate lists of classes or other attribute values in the DOM (Document Object Model).


//. classList
//> shorthand for DOMtokenList ehich works for class attribute
//> returns all the space-separated classes present in selected element
//x its read-only and cannot directly modifiede

//tip: to check whether a element has a class or not use classList.contains()
console.log(document.getElementById("cap").classList.contains("cap")) //false
//- use prediefined methods:
        //. add("token1, token2, ...tokenN"):
            //> to add tokens in the list
            console.log("Before Adding: ",document.getElementById("cap").classList); //[ 'parent']
            document.getElementById("cap").classList.add("cap")
            console.log("After Adding: ",document.getElementById("cap").classList); // ['parent', 'cap']
            
            //. replace(old_token,new_token)
                //> replaces exisitng token with specified new token
                //x if exisiitng not found return false
                //> returns true for sucessfull replacement and false if failed
                document.getElementById("cap").classList.replace("cap","capture")    
                console.log("After Replacing: ",document.getElementById("cap").classList); // ['parent', 'capture']
                console.log(document.getElementById("cap").classList.replace("cap","capture")) //false
                //> since cap does not exist anymore it got replaced by capture 
                
                
                //. remove("token1, token2, ...tokenN")
                    //> removes the mentioned token, returns undefined 
                    //- returns undefined even if speified token not found
                    document.getElementById("cap").classList.remove("capture")
                    console.log("After Removal: ",document.getElementById("cap").classList); // ['parent']
                    
                    //. toggle(token, force)
                    //> removes an existing token from the list and returns false. 
                    //> If the token doesn't exist it's added and the function returns true.
                    
                    // force: transforms toogle into one-way opraation
                    //> true: tokens can only be added
                    //> false: tokens can only be removed
                    
                    document.getElementById("cap").classList.toggle("switch", true);
                    console.log("Toggle, force set to true: ",document.getElementById("cap").classList); // ['parent', 'switch']
                    document.getElementById("cap").classList.toggle("switch", false);
                    console.log("Toggle, force set to false: ",document.getElementById("cap").classList); // ['parent']
                    
                    document.getElementById("cap").classList.toggle("highlight", false)
                    console.log("Toggle, force set to false: ",document.getElementById("cap").classList); // ['parent']
                    //> see 'highlight' token is not added in the list since toggel is set to false

