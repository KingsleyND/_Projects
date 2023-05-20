import HomeContent from "./initial-content";
import menuContent from "./menu";
import contactContent from "./contact";
import "./style.css";


const content = document.getElementById("content");

const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");
const homeButton = document.getElementById("home");


// Initial homepage display

content.appendChild(HomeContent());
// content.appendChild(menuContent());
// content.appendChild(contactContent());

const display = { 
homeDisplay : document.getElementById("home-container"),
menuDisplay: document.getElementById("menu-content"),
contactDisplay: document.getElementById("contact-content"),
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
        display.contactDisplay = document.getElementById("contact-content");
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
    display.contactDisplay = document.getElementById("contact-content");
    }
}

const displayContact = ()=>{
    // console.log(display.menuDisplay)
    if (display.contactDisplay === null){
        if (display.homeDisplay){
            display.homeDisplay.remove(); 
        }else if(display.menuDisplay){
            display.menuDisplay.remove();
        }
        
        content.appendChild(contactContent()); 
        display.menuDisplay = document.getElementById("menu-content");
        display.homeDisplay = document.getElementById("home-container");
        display.contactDisplay = document.getElementById("contact-content");
    } 
}

// Tab buttons:
contactButton.addEventListener("click", displayContact)
menuButton.addEventListener("click", displayMenu);
homeButton.addEventListener("click", displayHome);



console.log("ODIN");