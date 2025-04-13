//. A system to Understand this keyword

//.Prequisities
//> Special Cases: 
/* 
    > 1. bind,call,apply
    > 2. new 
    > 3. =>
    > 4. super.method() 
    
    
    . Invoked as method:
    > When function called using an object -> object.method()
    */

//. System Flow
/*

╔════════════════════════════════════════════════════════════╗
║                        SPECIAL CASE                        ║
╚════════════════════════════════════════════════════════════╝

┌───────────┐   ┌───────────┐   ┌───────────┐   ┌───────────┐
│bind, call,│   │    new    │   │    =>     │   │   super   │
│   apply   │   │           │   │           │   │ .method() │
└───────────┘   └───────────┘   └───────────┘   └───────────┘
      │               │               │               │
      │               │               │               │
      ▼               ▼               ▼               ▼
┌───────────┐   ┌───────────┐ ┌──────────────┐┌──────────────┐
│ Up to you │   │ New empty │ │Outside `this`││Outside `this`│
│           │   │  object   │ │when function ││when function │
└───────────┘   └───────────┘ │  is created  ││  is invoked  │
                              └──────────────┘└──────────────┘

╔════════════════════════════════════════════════════════════╗
║                        COMMON CASE                         ║
╚════════════════════════════════════════════════════════════╝

                        ┌───────────┐
                        │   In a    │         ┌───────────┐
                        │ function? │────No──▶│  window   │
                        └───────────┘         └───────────┘
                              │
                             Yes
                              │
                              ▼
                        ┌───────────┐
                        │Invoked as │
                        │  method?  │
                        └───────────┘
                              │
                 ┌─────Yes────┴──────No────┐
                 │                         │
                 ▼                         ▼
       ┌───────────────────┐     ┌───────────────────┐
       │                   │     │ window (undefined │
       │    Left of dot    │     │if function created│
       │                   │     │     on class)     │
       └───────────────────┘     └───────────────────┘

*/


//> Simplified- Questions to ask:
/*
> Is this in a special case ?
> Is this inside a function body ?
>    If yes,Is the above function called as obj.method() ? 
*/


//. using this is classes 

class demo{
      constructor(name){
            this.name = name
            //> How can we use values without declaring them with let,const?
            //>You are assigning a property on the object being created 
            //> If let, const is used they create local variables within the scope of constructor rather than object
            //- Think as: Hey this (which is the new object), please create a property named name and assign it the value passed in.”
      }

      withoutTHIS(){
            console.log("name without this: ",demo.name);
            //x Error since there is no name value in this scope 
            
      }
      withThis(){
            console.log("this.name =",this.name);
            //- .this is used to access value from the instance.
            
      }

}


let d1 = new demo("JS")
d1.withThis();
d1.withoutTHIS();