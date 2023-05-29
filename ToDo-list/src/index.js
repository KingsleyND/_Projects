import "./style.css";



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
    addProjectText.classList.remove("hidden");
}


addProjectText.addEventListener("click",addProject);
addProjectButton.addEventListener("click", addNewProject);



const cancelInput = ()=>{
    inputForm.classList.add("hidden");
    overlay.classList.add("hidden");
}

cancelInputButton.addEventListener("click",cancelInput);
