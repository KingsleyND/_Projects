import foodImage from "./images/food-images/th.jpeg";
import "./style.css";

function menuContent(){
    const container = document.createElement("div");
    container.className = "menu-content";
    container.id = "menu-content";

    const header = document.createElement("h1");
    header.textContent = "Our Menu";
    header.className = "menu-header";
    container.appendChild(header);

    const menuItems = document.createElement("div");
    menuItems.className = "menu-items";
    container.appendChild(menuItems);

    const menuItem = ()=>{
        const itemContainer = document.createElement("div");
        itemContainer.className = "item-container"

        const itemImage = document.createElement("img");
        itemImage.src = foodImage;
        itemContainer.appendChild(itemImage);

        const itemTitle = document.createElement("h3");
        itemTitle.textContent = "Soupe à l'oignon";
        itemContainer.appendChild(itemTitle)

        const itemDescription = document.createElement("p");
        itemDescription.textContent = "Dish made with caramelized onions, beef broth, white wine, and topped with toasted bread and melted Gruyere cheese. Perfect for a chilly evening or as a starter to a French-inspired meal.";

        itemContainer.appendChild(itemDescription);

        return itemContainer
    }
    for(let i=0; i<=4; i+=1){
        menuItems.appendChild(menuItem());
    }
    
    
    

    return container;
}

export default menuContent;