//. export 
//> The export declaration is used to export values from a JavaScript module.

//Note: to use export in a source file, the file must be interpreted by the runtime as a module. In HTML, this is done by adding type="module" to the <script> tag.

//. Types of Exports

    //. Named Exports
        export let a =1;
        //> a single module can have multiple named exports
        //- these can be exported as list.

        let b = 2;
        let c = 3;

        export{b,c}
        //x the list shouldn't be empty
    
         //> Named Export must be imported using the same name used to export if "as" is not being used in import, 
         // > here b can be imported using the name b only if ass is not used.

    //. default exports
    //> a single file can only have one default export

    //> two methods:
        let d =4;
        // export default d;
    //> commented since only one default export
        let e = 5;
        export {e as default}

    //Note: default exports must be unique and non-duplicate

    //> default export allows expression as well
    // export default 1+1;


    //> Default exports can be imported using any name with/without "as" since they are the only export the module makes


    
//. Renaming exports
//> exports can be renamed using "as" keyword to avoid naming conflicts
//Note: only for named exports

let f = 6;
let g = 7;
export{ f as six, g as seven}