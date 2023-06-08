// Create Project and add to DOM



// Add Project
export const addProjectFunc = (projectNamesArray, projectsObject) => {
  const projectTitleInput = document.getElementById("project-title");
  const newProjectName = projectTitleInput.value;
  console.log(newProjectName);
  projectNamesArray.push(newProjectName);

  for (let i = 0; i < projectNamesArray.length; i += 1) {
    const name = projectNamesArray[i];
    // eslint-disable-next-line no-param-reassign
    projectsObject[name] = {};
  }

  console.log(projectsObject);

  return newProjectName;
};
export const addProjectDOM = (projectHTMLname, projectNamesArray) => {
  // Add to navbar
  const navList = document.getElementById("nav");
  const projectLi = document.createElement("li");
  projectLi.className = "project";
  projectLi.innerHTML = projectHTMLname;

  navList.insertBefore(
    projectLi,
    navList.children[1 + projectNamesArray.length]
  );
          
  // Add to project dropdown
  const projDropdown = document.getElementById("project-drpdwn");
  const projDropdownName = document.createElement("a");
  projDropdownName.className = "proj"
  projDropdownName.innerHTML = projectHTMLname;
  projDropdown.insertBefore(
    projDropdownName,
    projDropdown.children[1 + projectNamesArray.length]
  );
  
};

// CREATE task and add to DOM
export const createTaskDOM = (title, dueDate, priority) => {
  const ToDoListDOM = document.getElementById("to-do-list");
  const taskContainer = document.createElement("div");
  taskContainer.className = "to-do-item";
  const taskContainerHalf = document.createElement("div");
  taskContainerHalf.className = "item-title-half";
  taskContainer.appendChild(taskContainerHalf);
  const taskTitle = document.createElement("p");
  taskTitle.className = "item-title";
  taskTitle.innerHTML = title;
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
  taskContainer.appendChild(checkboxPriorityDOM);

  ToDoListDOM.appendChild(taskContainer);
};

// Priority dropdown function
const priorityDrpdwn = document.getElementById("priority");
const lvls = document.querySelectorAll(".lvl");

function getPriorityStyle(levelText){
    if(levelText === "Low"){
        priorityDrpdwn.setAttribute("style","background-color: rgb(0,255,0); color:white")
    }else if(levelText ==="Moderate"){
        priorityDrpdwn.setAttribute("style","background-color: rgb(255, 145, 0); color:white")
    }else if(levelText==="High"){
        priorityDrpdwn.setAttribute("style","background-color: rgb(255, 37, 37); color:white")
    }
    
}

export const selectPriority = () => {
  lvls.forEach((lvl) => {
    lvl.addEventListener("click", () => {
      priorityDrpdwn.innerHTML = lvl.innerHTML;
      getPriorityStyle(lvl.innerHTML);
      
    });
  });
};
// select Project Dropdown

export const selectProject = ()=>{
    const projectDrpdwn = document.getElementById("project-btn");
    const projs = document.querySelectorAll(".proj");

    console.log("9");
    projs.forEach((proj)=>{
        proj.addEventListener("click",()=>{
            projectDrpdwn.innerHTML = proj.innerHTML;
        })
    })
    
}
 
// function getTaskInfo() {
//   const taskID = TaskId
//   // const projectName = projectNameX;
//   const taskTitle = document.getElementById("title").value;
//   const taskDescription = document.getElementById("description-input").value;
//   const dateValue = document.getElementById("due-date").value;
//   const priorityValue = document.getElementById("priority").innerText;
//   const projectValue = document.getElementById("project-btn").innerHTML;
//   const complete = false;

//   return {taskID, taskTitle, taskDescription, dateValue, priorityValue, projectValue, complete}
// }


// function saveTasktoProject(){
//     const ${`task`id}
//     (function(){

//     }())

// }

export const clearFormInfo = () => {
  document.getElementById("title").value = "";
  document.getElementById("description-input").value = "";
  document.getElementById("due-date").value = "2030-07-22";
  document.getElementById("priority").innerHTML = "Low";
  document.getElementById("priority").style.backgroundColor="rgb(25, 239, 25)"
  document.getElementById("project-btn").innerHTML = "Today";
};
