//. Asynchronous Programming 
//>  technique that enables your program to start a potentially long-running task 
//>  and still be able to be responsive to other events while that task runs
//>  rather than having to wait until that task has finished.


//. Synchrnous Programming
//> program will be stuck waiting for the response and cannot do anything else until the response is returned.
//-  This is known as blocking,
//>  and it can lead to an application appearing unresponsive or "frozen" to the user.

document.getElementById("b1").addEventListener("click",function(){
    alert("The web page as gone into blocking(frozen) state and you cannot click the below button")
    for(let i = 0;i<820010075;i++){
       if((i>=0||i<999) &&( i+0 == 0 && i*1==i)){
        continue;
       }
    }
    document.getElementById("point").textContent="The long process is done now you click the below button"
})

document.getElementById("b2").addEventListener("click", function(){
    alert("You have clicked the 2nd button")
})


document.getElementById("b3").addEventListener("click", function(){
    setTimeout(() => {
         for(let i = 0;i<820010075;i++){
       if((i>=0||i<999) &&( i+0 == 0 && i*1==i)){
        continue;
       }
    }
    document.getElementById("point").textContent="Task is completed"
}, 5000);
document.getElementById("point").textContent="The same long process is running but the web page is not frozen, you can click the below button"
})