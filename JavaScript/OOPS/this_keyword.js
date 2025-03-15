//. A system to Understand this keyword

//.Prequisities
//> Special Cases: 
/* 
    > 1. bind,call,apply
    > 2. new 
    > 3. =>
    > 4. super.method() 
    
    
    . Invoked as method:
    > Wen function called using an object -> object.method()
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