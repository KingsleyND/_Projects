import "./style.css";
import {
  createTaskDOM,
  addProjectDOM,
  addProjectFunc,
  selectPriority,
  clearFormInfo,
  selectProject,
  isToday,
  displayProjectTasks,
  // App,
} from "./dom";

// const tester = document.getElementById("home")
// tester.addEventListener("click", ()=>{console.log(projects)})
const saveButton = document.getElementById("save");

let TaskId = 1;
const  getTaskInfo = ()=>{
  const taskID = TaskId
  // const projectName = projectNameX;
  const taskTitle = document.getElementById("title").value;
  const taskDescription = document.getElementById("description-input").value;
  const dateValue = document.getElementById("due-date").value;
  const priorityValue = document.getElementById("priority").innerText;
  const projectValue = document.getElementById("project-btn").innerHTML;
  const complete = false;

  return {taskID, taskTitle, taskDescription, dateValue, priorityValue, projectValue, complete}
}


const AllToDoItems = {};

export const projectNames = ["Home", "Today", "Gym", "Work"];

// Projects object
export const projects = {};

// Main task creator factory which changes task ID
function createTask() {
  const ATask = getTaskInfo()
  

  
  return ATask;
}

// Save task object to project 
function saveTasktoProject(){
 const projectsName=document.getElementById("project-btn").innerHTML

// First create task Object and put in Home object
 projects.Home[`task${TaskId}`] = createTask();

// next create task object and put in Today project object
// const taskDate = projects.Home[`task${TaskId}`].dateValue

if(isToday(projects.Home[`task${TaskId}`].dateValue)===true){
  projects.Today[`task${TaskId}`] = createTask();
}
    // create task Object for its project
    // eslint-disable-next-line no-param-reassign
  projects[projectsName][`task${TaskId}`] = createTask();
    
  console.log(projects.Home[`task${TaskId}`].taskTitle);

    createTaskDOM(projects.Home[`task${TaskId}`].taskTitle, projects.Home[`task${TaskId}`].dateValue, projects.Home[`task${TaskId}`].priorityValue);

    TaskId += 1;

    console.log(projects)

}

// Add Project Section
const addProjectText = document.getElementById("add-project-text");
const addProjectDiv = document.getElementById("add-project-name");
const addProjectButton = document.getElementById("add-new-project");



// To-do Input form
const inputForm = document.getElementById("input-form");
const overlay = document.getElementById("overlay");
const cancelInputButton = document.getElementById("cancel-input");
const priorityDrpdwn = document.getElementById("priority");

const addToDoButton = document.getElementById("add-to-do");

const bringUpInputForm = () => {
  overlay.classList.remove("hidden");
  inputForm.classList.remove("hidden");
  
};

addToDoButton.addEventListener("click", bringUpInputForm);

const addProject = () => {
  addProjectText.classList.add("hidden");
  addProjectDiv.classList.remove("hidden");
};

// Function to add listener and displayFunction to each project on Nav
// Project Nav Displays
const getProjectList =()=>{
  const DOMProjects = document.querySelectorAll(".project")
  for (let i=0; i<DOMProjects.length;i+=1){
   const projectNameDOM =  DOMProjects[i].innerHTML
    DOMProjects[i].addEventListener("click",()=>displayProjectTasks(projects,projectNameDOM))
  }
  console.log("added");

  }

  const addNewProject = () => {
    addProjectDiv.classList.add("hidden");
    addProjectText.classList.remove("hidden");

    addProjectDOM(addProjectFunc(projectNames, projects), projectNames);
  //   add projs to input dropdown
    selectProject();

  // add project to Nav function
  
  getProjectList();
  
};

addProjectText.addEventListener("click", addProject);
addProjectButton.addEventListener("click", addNewProject);

// Cancel / close form
const cancelInput = () => {
  inputForm.classList.add("hidden");
  overlay.classList.add("hidden");
  clearFormInfo();
};

cancelInputButton.addEventListener("click", cancelInput);

// Add projects to backend initially
((projectNamesArray,projectsObject)=>{
  for (let i = 0; i < projectNamesArray.length; i += 1) {
    const name = projectNamesArray[i];
    // eslint-disable-next-line no-param-reassign
    projectsObject[name] = {};
  }
})(projectNames,projects)


// Set priority and change bg color
selectPriority();

// Set Project 
selectProject();


// Input Save Buttton
saveButton.addEventListener("click",saveTasktoProject);


// adding task to DOM
createTaskDOM("BAD5", 1994, "Low9");

// // Project Nav Displays
// // make this a function so it gets all the projects list after each project save 
// const getProjectList =()=>{
// const DOMProjects = document.querySelectorAll(".project")
// for (let i=0; i<DOMProjects.length;i+=1){
//  const projectNameDOM =  DOMProjects[i].innerHTML
//   DOMProjects[i].addEventListener("click",()=>displayProjectTasks(projects,projectNameDOM))
// }
// }

