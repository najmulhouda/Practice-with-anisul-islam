import { Todo } from "./Todo.js";

// find the elements

const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#inputTodo");

const todoLists = document.querySelector("#lists");
const messageElement = document.querySelector("#message");
const checkbox = document.getElementById("check");

// message show
const showMessage = (text , status)=>{
    messageElement.textContent =text;
    messageElement.classList.add(`bg-${status}`);
    setTimeout(()=>{
        messageElement.textContent = "";
        messageElement.classList.remove(`bg-${status}`);
    },1000);
}

//create todo
const createTodo = (newTodo)=>{
    const todoElement = document.createElement("li");
    todoElement.id = newTodo.todoId;
    todoElement.classList.add("li-style");
    todoElement.innerHTML = `
    
    <span><input type="checkbox" id="check" name="click" value= "save" style="height:20px; width:20px;padding:3rem; vertical-align: middle;"  >${ newTodo.todoValue}</span>
    <span><button class="btn" id="deleteButton"><i class="fa-solid fa-trash"></i></button></span>
    `;
    todoLists.appendChild(todoElement); 
    const deleteButton = todoElement.querySelector("#deleteButton");
    deleteButton.addEventListener("click", deleteTodo)
    
}
//checkbox


//delete todo
  const deleteTodo = (event)=>{
      const selectedTodo = event.target.parentElement.parentElement.parentElement;

      todoLists.removeChild(selectedTodo);
      showMessage("todo deleted successfully" , "danger");

      let todos = getTodosFromLocalStorage();
      todos = todos.filter((todo)=>  todo.todoId !== selectedTodo.id);
      localStorage.setItem("mytodos" , JSON.stringify(todos));
  }


// get todos from local storage
const getTodosFromLocalStorage = ()=>{
    return localStorage.getItem("mytodos") ? JSON.parse(localStorage.getItem("mytodos")) : [];
}



// addTodo
const handleSubmit = (event)=>{
    event.preventDefault();
    const todoValue = todoInput.value; 


    //unique id
    const todoId = Date.now().toString();


    const newTodo = new Todo(todoId , todoValue);
    
    createTodo(newTodo);
    showMessage("todo added successfully" , "success");


    // add to local storage
    const todos = getTodosFromLocalStorage();
    todos.push({newTodo});
    localStorage.setItem("mytodos" , JSON.stringify(todos)); 
    todoInput.value = "";
}
// load todos
const loadTodos = ()=>{
    const todos = getTodosFromLocalStorage();
    todos.map((todo)=>{
        createTodo(todo);
    })
}
// adding listeners
todoForm.addEventListener("submit", handleSubmit);
window.addEventListener("DOMContentLoaded", loadTodos);