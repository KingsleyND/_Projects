


const today = new Date();
const date = `${today.getFullYear()}-${today.getMonth()+1} ${today.getDate()}`;


const get12hTime = (time24h)=>{
    const hours = time24h.split(":")[0];
    const minutes = time24h.split(":")[1];
    if (hours > 12){
        const time12h = `${hours- 12}:${minutes} PM`
        return time12h
    }
    return `${time24h} AM`;
}

console.log(get12hTime("23:09"))

// Gif generator
async function fetchGif(word){
    const res = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=gnyJpy9CPOaN30eY3pzmiTh73la554NT&s=${word}`)
    if (res.status === 200){
    const gifData = await res.json();
    console.log(gifData)
        const gifSrc =  gifData.data.images.original.url; 
        console.log(gifSrc)
        return gifSrc ;
        
    }
    
      throw new Error(res.status) 
};

//  console.log(fetchGif("wunna"))
// https://media2.giphy.com/media/iiPX68eBIBNSzTNfl4/giphy.gif?cid=2eb775f7rpffpoccohbdxbjwn7nxvsqzsxtsb8xsaq4kp86j&ep=v1_gifs_translate&rid=giphy.gif&ct=g

async function getWeather(place){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=da8b7883c24a41ad96493418231007&q=${place}`)
    const weatherData = await response.json()

    const location = `${weatherData.location.name}, ${weatherData.location.country}`;
    const dateArray = weatherData.location.localtime.split(" ");
    const locationTime = dateArray[1];
    const degree = weatherData.current.temp_c;
    const placeCondition = weatherData.current.condition.text;
    const conditionIcon = weatherData.current.condition.icon;

    
    
    return{location, placeCondition, conditionIcon, weatherData, degree, locationTime}
}

async function getData(){
    const locationInput = document.getElementById("location-input").value
    const weatherPlace = getWeather(locationInput);
    
    const placeText = document.getElementById("place-title");
    placeText.innerText = (await weatherPlace).location
    const locationTime = document.getElementById("time");
    locationTime.innerText = get12hTime((await weatherPlace).locationTime);
    const locationCondition = document.getElementById("condition");
    locationCondition.innerText = (await weatherPlace).placeCondition
    const locatiionDegree = document.getElementById("degree");
    locatiionDegree.innerText = (await weatherPlace).degree;
    const weatherIcon = document.getElementById("icon");
    weatherIcon.src = (await weatherPlace).conditionIcon;
    const weatherGif = document.getElementById("weather-gif");  
    weatherGif.src = (await fetchGif(`${(await weatherPlace).placeCondition} weather`));
    
    console.log((await weatherPlace).conditionIcon)
    console.log((await weatherPlace).weatherData)
}

// getData()





function test(){
    return console.log("FLEXUP")
}