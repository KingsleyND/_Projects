import "./style.css";


function contactContent(){
    const container = document.createElement("div");
    container.className = "contact-content";
    container.id = "contact-content";

    const contactTitle = document.createElement("h1");
    contactTitle.textContent="Let's hear from You";
    contactTitle.className= "contact-title";

    container.appendChild(contactTitle);

    const contactsContainer = document.createElement("div");
    contactsContainer.className = "contacts-container";
    container.appendChild(contactsContainer);

    const phoneContainer = document.createElement("div");
    phoneContainer.className="phone";
    const phoneTitle = document.createElement("h3");

    phoneTitle.textContent= "Phone";
    phoneContainer.appendChild(phoneTitle);

    const numbers = ["+474 232 424 2424", "+225 430 3435", "+239 343 2353"];
    const numberList = document.createElement("ul")
    for(let i=0; i< numbers.length; i+=1){
        const number = document.createElement("li");
        number.textContent = numbers[i];
        numberList.appendChild(number);
    }

    phoneContainer.appendChild(numberList);
    contactsContainer.appendChild(phoneContainer);

    const emailContainer = document.createElement("div");
    const emailTitle = document.createElement("h3");
    emailTitle.textContent= "E-mail";
    emailContainer.appendChild(emailTitle);


    const emails = ["elonmusk12@gmail.com", "hova444@gmail.com", "pluto200@gmail.com"]
    const emailList = document.createElement("ul")
    for(let i=0; i< emails.length; i+=1){
        const email = document.createElement("li");
        email.textContent = emails[i];
        emailList.appendChild(email);
    }
    emailContainer.appendChild(emailList);

    emailContainer.className = "email";
    contactsContainer.appendChild(emailContainer);


    return container;
    

}

export default contactContent;