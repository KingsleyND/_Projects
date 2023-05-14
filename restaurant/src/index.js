import HomeContent from "./initial-content";
import menuContent from "./menu";
import "./style.css";


const content = document.getElementById("content");

const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");
const homeButton = document.getElementById("home");


// content.appendChild(menuContent());
content.appendChild(HomeContent());


const homeDisplay = document.getElementById("home-container");
const menuDisplay = document.getElementById("menu-content");
// const contact = document.getElementById("contact");





// const homeDisplayed = document.getElementById("home-container");






const displayMenu = ()=>{
    
    if (menuDisplay === null){
        if (homeDisplay){
            homeDisplay.remove();
            
        }
    } 
    content.appendChild(menuContent());
} ;

// const displayHome = ()=>{
//     if(homeDisplay == null){
//         if(menuDisplay){
//             menuDisplay.remove();
//         }
//     }
//     content.appendChild(HomeContent())
// }



menuButton.addEventListener("click", displayMenu);

// homeButton.addEventListener("click", displayHome)

// contact.addEventListener("click", ()=>{});

console.log();


console.log("ODIN");