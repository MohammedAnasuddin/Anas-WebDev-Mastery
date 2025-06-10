//. import
//> imported bindings are called live bindings because they are updated by the module that exported the binding, 
//> but cannot be re-assigned by the importing module.
//x Can't modify the imported values only usable.

import {six} from 'ESM_export.js'
six++;
console.log(six)

//. Syntax for named import:
//> import { export1 as alias1, export2 as alias2 } from "module-name";
//- use this method only if properties inside {} are exported by the module.
//> module_name should be in quotes

//Note: Import should only be present at top-level

