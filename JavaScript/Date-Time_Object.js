//. Date Object
//> Date objects represent a single moment in time in a platform-independent format.
//- Date objects encapsulate an integral number that represents milliseconds since the 
//- midnight at the beginning of January 1, 1970, UTC (the epoch).


let now = new Date();
console.log("Current Moment: ",now.getTime()); //1747905764105

//Note: The limit of these milliseconds is slightly less than Number's safe integer value 
//Tip: Maximum range of days represented by these milliseconds are 100M days

//. Locale time
  //> can be calculated as locale time and UTC (Coordinated Universal Time (UTC))

//. getTimezoneOffset()
    //> A number representing the difference, in minutes, between the date as evaluated in the UTC time zone 
    //> and as evaluated in the local time zone.
    
   
    console.log("using offset: ",now.getTimezoneOffset()) //-330 
    //- This is the locale is 5hrs 30mins behind UTC


//. Format Date 
//> Syntax: YYYY-MM-DDTHH:mm:ss.sssZ

//> T: Separator between Date and Time, used to create ISO Date String
//> Z: to get the offset between UTC and Locale


//Tip: For Reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

//. .getMonth()
  //> to get the month using zero based index
  //> JAN-0, FEB-1,...,DEC-11