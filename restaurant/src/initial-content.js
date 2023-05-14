import homePageImage from "./images/home-image.jpg"
import "./style.css";



const content = document.getElementById("content")

function homeContent(){
    const container = document.createElement("div");
    container.className = "home-container";
    container.id = "home-container";

    const homeImage = document.createElement("img");
    homeImage.src = homePageImage;
    homeImage.className = "home-image"
    container.appendChild(homeImage);

    const homeDescription = document.createElement("p");
    homeDescription.textContent = "Les Deux Palais is an absolutely wonderful restaurant that has earned a reputation as one of the best dining destinations in the city. From the moment you walk through the door, you are greeted with a warm and welcoming atmosphere that sets the stage for an unforgettable meal. The decor is elegant and sophisticated, with plush furnishings, beautiful lighting, and charming accents.";

    container.appendChild(homeDescription);




    return container;
}

export default homeContent;