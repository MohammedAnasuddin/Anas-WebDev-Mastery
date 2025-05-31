//Tip: Always preform dom events after DOM is loaded

document.addEventListener("DOMContentLoaded",()=>{
  //> Step-1: Grab all the elements

const todo_input = document.getElementById("todo-input");
const add_button= document.getElementById("add-task-btn");
const task_list =document.getElementById("todo-list")

let tasks = JSON.parse(localStorage.getItem("tasks")) || []

tasks.forEach((task)=>{
  renderTask(task)
});


//> Adding a task 
add_button.addEventListener("click",()=>{
   const taskText = todo_input.value.trim()
   if(taskText == "") {
    alert("Input cannot be empty")
    return 
   }

   const newTask = {
    id: Date.now(),
    text: taskText,
    isCompleted: false
   }

   tasks.push(newTask);
   saveTasks();
   //> Clearing the input 
   todo_input.value="";
   console.table(tasks)
   renderTask(newTask)
 
})


function saveTasks(){
  localStorage.setItem("tasks",JSON.stringify(tasks))
}

function renderTask(task){
  const task_box = document.createElement('li');
  if(task_box.isCompleted){
    task_box.classList.add("completed");
  }

  task_box.setAttribute("data-id",task.id);
  task_box.innerHTML = `<span>${task.text}</span> 
                        <button>Delete</button>`
  
  
  task_box.addEventListener('click',(e)=>{
    if(e.target.tagName ==="BUTTON"){
      return ;
    }
    task.isCompleted = !task.isCompleted
    task_box.classList.toggle("completed")
    saveTasks()
    

  })

  task_box.querySelector('button').addEventListener("click",(e)=>{
    e.stopPropagation() //prevent 
    tasks = tasks.filter((element)=>{
      return (element.id != task.id)
    })
    task_box.remove();
    saveTasks();

  })
  task_list.appendChild(task_box);
}





})


//> TO learn
/* 
1. local storage
2. e.target
3. json parse and stringfy
4. e.stoppropagation

*/