import "./style.css";

// const tester = document.getElementById("home")
// tester.addEventListener("click", ()=>{console.log(projects)})

function createToDoItem(title, description, dueDate, priority, complete) {
    return { title, description, dueDate, priority, complete };
  }
  const AllToDoItems = [];
  

const projectNames = ["Gym", "Work"]

const projects = {}


//Add Project
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
    const navList = document.getElementById("nav");
    const projectLi = document.createElement("li");
    projectLi.className = "project";
    projectLi.innerHTML = projectHTMLname;

    navList.insertBefore(projectLi, navList.children[3+projectNames.length])
}

// for(let i=0; i<projectNameHtmls; i+=1){
//     console.log(projectNameHtmls[i].innerHTML)
//     projectNames.push(projectNameHtmls[i].innerHTML);
// }

























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



const cancelInput = ()=>{
    inputForm.classList.add("hidden");
    overlay.classList.add("hidden");
}

cancelInputButton.addEventListener("click",cancelInput);
