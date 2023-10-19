// find the elements
const container = document.querySelector(".container");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#inputTodo");
const todoAddButton = document.querySelector("#addTodoButton");
const todoLists = document.querySelector("#lists");



//create todo
const createTodo = (todoId,todoValue)=>{
    const todoElement = document.createElement("li");
    todoElement.id = todoId;
    todoElement.innerHTML = `
    <span>${todoValue}</span>
    <span><button class="btn" id="deleteButton"><i class="fa-solid fa-trash"></i></button></span>
    `;
    todoLists.appendChild(todoElement); 
    
}

// addTodo
const handleSubmit = (event)=>{
    event.preventDefault();
    const todoValue = todoInput.value; 


    //unique id
    const todoId = Date.now().toString();
    
    createTodo(todoId,todoValue );
}

// adding listeners
todoForm.addEventListener("submit", handleSubmit);