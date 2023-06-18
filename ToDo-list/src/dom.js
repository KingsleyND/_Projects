// Create Project and add to DOM
import {
  format,
  parseISO,
}from "date-fns";


// Add Project
export const addProjectFunc = (projectNamesArray, projectsObject) => {
  const projectTitleInput = document.getElementById("project-title");
  const newProjectName = projectTitleInput.value;
  // console.log(newProjectName);
  projectNamesArray.push(newProjectName);

  for (let i = 0; i < projectNamesArray.length; i += 1) {
    const name = projectNamesArray[i];
    // eslint-disable-next-line no-param-reassign
    projectsObject[name] = {};
  }

  // console.log(projectsObject);
  // console.log("777");

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

const strikeThrough=(taskItem,priorityTag,prevBackground)=>{
  taskItem.classList.toggle("completed-task")
  if(priorityTag.style.backgroundColor!== "rgb(156, 156, 156)"){
    priorityTag.style.backgroundColor="rgb(156, 156, 156)";
  }else if(priorityTag.style.backgroundColor ==="rgb(156, 156, 156)"){
    priorityTag.style.backgroundColor=prevBackground;
  }
  
}
// priorityTag.classList.toggle("priority-completed");




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
  checkboxInput.name = "completed";
  checkboxInput.value = "on";
  checkboxInput.className = "checkbox";
  

  checkboxPriorityDOM.appendChild(checkboxInput);
  const priorityHTML = document.createElement("p");
  priorityHTML.id = "display-priority";
  priorityHTML.innerHTML = priority;
 switch(priorityHTML.innerHTML){
  case "Low":
    priorityHTML.style.backgroundColor= "rgb(24, 92, 180)";
    priorityHTML.style.color="white";
    break;
  case "Moderate":
    priorityHTML.style.backgroundColor= "rgb(255, 145, 0)";
    priorityHTML.style.color="white";
    break;
  case "High":
    priorityHTML.style.backgroundColor= "rgb(255, 37, 37)"
    priorityHTML.style.color="white";
  // no default      
}
const previousBackground = priorityHTML.style.backgroundColor;
  checkboxInput.addEventListener("click",()=>{strikeThrough(taskContainer,priorityHTML,previousBackground)});

  checkboxPriorityDOM.appendChild(priorityHTML);
  taskContainer.appendChild(checkboxPriorityDOM);

  ToDoListDOM.appendChild(taskContainer);
};

// Priority dropdown function
const priorityDrpdwn = document.getElementById("priority");
const lvls = document.querySelectorAll(".lvl");

function getPriorityStyle(levelText){
    if(levelText === "Low"){
      priorityDrpdwn.style.backgroundColor= "rgb(24, 92, 180)";
      priorityDrpdwn.style.color="white";
    }else if(levelText ==="Moderate"){
        priorityDrpdwn.style.backgroundColor= "rgb(255, 145, 0)";
        priorityDrpdwn.style.color="white";
    }else if(levelText==="High"){
        priorityDrpdwn.style.backgroundColor= "rgb(255, 37, 37)"
        priorityDrpdwn.style.color="white";
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

    projs.forEach((proj)=>{
        proj.addEventListener("click",()=>{
            projectDrpdwn.innerHTML = proj.innerHTML;
        })
    })
}

// DATES
const DateNow = new Date()
const inputDateDisplay = format(DateNow,("yyyy-LL-dd"));
document.getElementById("due-date").value=inputDateDisplay;
document.getElementById("home-date").innerHTML=format(DateNow,"E do LLL yyyy");

const greeting = ()=>{
  const Clock24 = format(DateNow,("H"))
  let homeGreeting;
  if(Clock24 >=12 && Clock24<18){
    homeGreeting= "Good afternoon";
  }else if(Clock24 >=18 && Clock24 < 24){
    homeGreeting="Good evening"
  }else{
    homeGreeting="Good morning"
  }
  return homeGreeting;
}
document.getElementById("home-greeting").innerHTML = greeting();

// export const FormatDate = (date)=>{
//   const todayDate = format(DateNow,"yyyy/mm/dd");

//    return todayDate
// }

const result = parseISO("2014-02-11")
const displayDate = format(result,"E do LLL yyyy");
console.log(result);
console.log(displayDate);

export const clearFormInfo = () => {
  document.getElementById("title").value = "";
  document.getElementById("description-input").value = "";
  document.getElementById("due-date").value = inputDateDisplay;
  document.getElementById("priority").innerHTML = "Low";
  document.getElementById("priority").style.backgroundColor="rgb(24, 92, 180)"
  document.getElementById("project-btn").innerHTML = "Today";
};



// export const FormatDate = ()=>{
//   const date = new Date();

//   const tomorrow = addDays(date,1)

//   return (console.log(tomorrow))
// }


// switch(priorityHTML.innerHTML){
//   case "Low":
//     priorityHTML.setAttribute("style","backgroundColor= rgb(24, 92, 180); color:white")
//     break;
//   case "Moderate":
//     priorityHTML.setAttribute("style","background-color: rgb(255, 145, 0); color:white")
//     break;
//   case "High":
//     priorityHTML.setAttribute("style","background-color: rgb(255, 37, 37); color:white");
//   // no default      
// }