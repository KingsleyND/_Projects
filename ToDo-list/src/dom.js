// Create Project and add to DOM

import { projectNames, projects  } from "./index";

// Add Project
const addProjectFunc = ()=>{
    const projectTitleInput = document.getElementById("project-title");
    const newProjectName = projectTitleInput.value;
    projectNames.push(newProjectName)

    for (let i=0;i<projectNames.length; i+=1){
        const name = projectNames[i];
          projects[name] = [];
        }

    console.log(projects)

    return newProjectName
}
 const addProjectDOM = (projectHTMLname)=>{
    // Add to navbar
    const navList = document.getElementById("nav");
    const projectLi = document.createElement("li");
    projectLi.className = "project";
    projectLi.innerHTML = projectHTMLname;

    navList.insertBefore(projectLi, navList.children[3+projectNames.length])

    // Add to project dropdown
    const projDropdown =document.getElementById("project-drpdwn");
    const projDropdownName = document.createElement("a")
    projDropdownName.innerHTML = projectHTMLname;
    projDropdown.insertBefore(projDropdownName,projDropdown.children[1+projectNames.length])

}


// Add Project Section
const addProjectText = document.getElementById("add-project-text");
const addProjectDiv = document.getElementById("add-project-name");
const addProjectButton = document.getElementById("add-new-project");

// To-do Input form
const inputForm = document.getElementById("input-form")
const overlay = document.getElementById("overlay")
const cancelInputButton = document.getElementById("cancel-input")





const addToDoButton = document.getElementById("add-to-do");

const bringUpInputForm = ()=>{
    overlay.classList.remove("hidden");
    inputForm.classList.remove("hidden");
}

addToDoButton.addEventListener("click",bringUpInputForm);




 const addProject = () => {
    addProjectText.classList.add("hidden");
    addProjectDiv.classList.remove("hidden");
}

const addNewProject = ()=>{
    addProjectDiv.classList.add("hidden");
    addProjectText.classList.remove("hidden")

    addProjectDOM(addProjectFunc())
}


addProjectText.addEventListener("click",addProject);
addProjectButton.addEventListener("click", addNewProject);

// STOP HIAAA

const cancelInput = ()=>{
    inputForm.classList.add("hidden");
    overlay.classList.add("hidden");
}

cancelInputButton.addEventListener("click",cancelInput);

// CREATE task and add to DOM
export const createTaskDOM= (title, dueDate, priority)=>{
    const ToDoListDOM = document.getElementById("to-do-list");
    const taskContainer = document.createElement("div");
    taskContainer.className = "to-do-item";
    const taskContainerHalf = document.createElement("div")
    taskContainerHalf.className = "item-title-half";
    taskContainer.appendChild(taskContainerHalf);
    const taskTitle = document.createElement("p");
    taskTitle.className = "item-title";
    taskTitle.innerHTML = title
    taskContainerHalf.appendChild(taskTitle);
  
    const dateTrash = document.createElement("div");
    dateTrash.className = "date-trash";
    const trashIcon = document.createElement("span");
    trashIcon.className = "material-symbols-outlined";
    trashIcon.innerHTML = "delete";
    dateTrash.appendChild(trashIcon);
    const dateHTML = document.createElement("p");
    dateHTML.className = "date";
    dateHTML.innerHTML = dueDate;
    dateTrash.appendChild(dateHTML);
    taskContainerHalf.appendChild(dateTrash);
  
    const checkboxPriorityDOM = document.createElement("div");
    checkboxPriorityDOM.className = "checkbox-priority-half";
    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxPriorityDOM.appendChild(checkboxInput);
    const priorityHTML = document.createElement("p");
    priorityHTML.innerHTML = priority;
    checkboxPriorityDOM.appendChild(priorityHTML);
    taskContainer.appendChild(checkboxPriorityDOM)
    
    ToDoListDOM.appendChild(taskContainer);
  }
