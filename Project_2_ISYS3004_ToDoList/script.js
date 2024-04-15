console.log("script Loaded");

//1. assign variables to DOM elements 

let addTaskButton = document.getElementById("add-button");
let newTaskInput = document.getElementById("task-input");
let todoListContainer = document.getElementById("todo-list");
let templateElement = document.getElementById("todo-item-template");
let template = templateElement.innerHTML;

/* Step 2. Lets write the function to handle the 'click' event
---------------------------------------------------------------*/

function onAddTaskClicked(event) {
    console.log("hello world");
    // Get the contents of the input box
    let taskName = newTaskInput.value;
    console.log(taskName);
    // clear the input box 
    newTaskInput.value = "";

    // Search and replace to add task name (found above)
    let todoHTML = template.replace("<!----TASK_NAME---->", taskName);

    // we have the formatted HTML, let's insert it into the to-do container 
    todoListContainer.insertAdjacentHTML('afterbegin', todoHTML);
}

function onTodoClicked(event) {
    let targetElement = event.target;

    while (targetElement && !targetElement.classList.contains("task")) {
        targetElement = targetElement.parentElement;
    }

    if (targetElement) {
        let checkbox = targetElement.querySelector(".checkbox");

        if (checkbox && checkbox.checked) {
            targetElement.classList.add("completed");
        } else {
            targetElement.classList.remove("completed");
        }
    }
}


/* Step 3 make the event trigger our functions
-----------------------------------------------*/ 
addTaskButton.addEventListener('click', onAddTaskClicked);
todoListContainer.addEventListener('click', onTodoClicked);