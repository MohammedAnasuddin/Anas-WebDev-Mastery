//. DOM Manipulation
//> 1. Select the element
//>2. Listening to events

//>c-1 

//Tip: Grab the event listeners first

 document.getElementById("changeTextButton").addEventListener('click',function(){
  console.log(this);
  //Tip: Check the context to know where event listener is referring to.
  let paragraph = document.getElementById("myParagraph")
  paragraph.textContent=" I'm Changed by below button"

 })
 //x Event Listener Callback functions required the context hence => functions cant be used
// console.log(button)



//>2.C-2
document.getElementById("highlightFirstCity").addEventListener("click", function (){
   let cities_list=  document.getElementById("citiesList")
   
   cities_list.firstElementChild.classList.add("highlight")
})



//>C-3
document.getElementById("changeOrder").addEventListener("click", function(){
    let coffee_type =document.getElementById(
    "coffeeType")

    coffee_type.textContent="Espresso"

    coffee_type.style.borderBlockColor="#dddddd"
})


//> C-4
document.getElementById("addNewItem").addEventListener("click", function (){
     
   let new_item=  document.createElement("li")
   new_item.textContent="Curd"
    document.getElementById("shoppingList").appendChild(new_item)

    //> Append Child expects a Node

    //- Since DOM processes HTML elements in Memory the same elements refereed as nodes
})


//> C-5

document.getElementById("removeLastTask").addEventListener("click",function(){
    let task_list= document.getElementById("taskList");

    task_list.lastElementChild.remove();
})

//>C-6
document.getElementById("clickMeButton").addEventListener("mouseover", function (){
    document.getElementById("clickMeButton").textContent="I'm Under Mouse"
})


//> C-7: Event Delegation
document.getElementById("teaList").addEventListener("click",function(event){
    //> event is a parameter which stores occurred event and its meta data
    console.log(event)
    // alert(event.target.textContent)
    
    //Tip: using matches to get more accurate expected selection
    
    if(event.target && event.target.matches(".teaItem")){
        alert(event.target.textContent)
        //- alert is only pop up for list items with class "teaItem" not fr un class list item (here Dummy Tea) even though it's the list.
   }
   


})
