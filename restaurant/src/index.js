import HomeContent from "./initial-content";
import menuContent from "./menu";
import "./style.css";


const content = document.getElementById("content");

const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");
const homeButton = document.getElementById("home");


// content.appendChild(menuContent());
content.appendChild(HomeContent());

const display = { 
homeDisplay : document.getElementById("home-container"),
menuDisplay: document.getElementById("menu-content"),
}



const displayMenu = ()=>{
    console.log(display.menuDisplay)
    if (display.menuDisplay === null){
        if (display.homeDisplay){
            display.homeDisplay.remove();
            
        }
        
        content.appendChild(menuContent()); 
        display.menuDisplay = document.getElementById("menu-content");
        display.homeDisplay = document.getElementById("home-container");
    } 
    
} ;

const displayHome = ()=>{
    console.log("clicked home");
    console.log(display.homeDisplay)
    if(display.homeDisplay == null){
        console.log("NLL")
        if(display.menuDisplay){
            display.menuDisplay.remove();
        }
    
    content.appendChild(HomeContent())
    display.menuDisplay = document.getElementById("menu-content");
    display.homeDisplay = document.getElementById("home-container");
    }
}



menuButton.addEventListener("click", displayMenu);

homeButton.addEventListener("click", displayHome);

                

console.log("ODIN");