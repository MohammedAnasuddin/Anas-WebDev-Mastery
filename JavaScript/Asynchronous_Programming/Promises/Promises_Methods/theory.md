### Promise.all()

Used to handle multiple promises together
Takes array of promises as input
Calls every promise together and wait until all promises are finished.
Working Scenarios: (Works like **ALL or NONE**)

1.  If all promises of input array are fulfilled
    - then .all returns an array of results all promises

2.  If any *one promise is rejected from the array*
    - **.all() will throw error (the same error returned by failed promise) on the spot**.
    - Does not wait for other promises anymore
    - Remaining on going promises will continue Independently


### Promise.allSettled()
Takes array of promises as input and **waits**  until all of them are settled(finished execution)

- Returns the array of final results of the settled promises
    - values if fulfilled
    - errors/reason if rejected  
- Always, Length of OP Array == Length of I/P array


### Promise.race()
Takes an array of promises as input, Returns the result of first settled promise as O/P


### Promise.any()
Takes an array of promises as input, Returns value of the result of first fulfilled promise as O/P
*Wait until first Success*
- If all Promises fails then it returns a Aggregated Error i.e, array of all errors of the promises