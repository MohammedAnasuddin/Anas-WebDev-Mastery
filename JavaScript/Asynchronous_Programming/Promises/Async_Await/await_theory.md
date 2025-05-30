### Working of await
1. JS suspends the termination of async function when encountered await i.e, removes from call stack 
2. and wait until the promise attached to await gets resolved. 
3. After resolved, the execution of async function resumes i.e, it is again placed in the call stack
4. async function starts execution from where it left previously i.e, from next line of await
5. **Note: await only waits for pending promises, if promise settled then it won't wait for directly returns resposne**