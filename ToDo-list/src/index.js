import "./style.css";
import { createTaskDOM } from "./dom";

// const tester = document.getElementById("home")
// tester.addEventListener("click", ()=>{console.log(projects)})

let TaskId = 1;
function createToDoItem(title, description, dueDate, priority,project, complete) {
  const id = TaskId
  return { title, id, description, dueDate, priority,project, complete };
}

// Main task creator factory which changes task ID
function createTask(title, description, dueDate, priority, complete){
TaskId += 1;  
  return createToDoItem(title, description, dueDate, priority, complete)
}

const AllToDoItems = [];


export const projectNames = ["Gym", "Work"]

export const projects = {}


// adding task to DOM



createTaskDOM("BAD5",1994,"Low");




