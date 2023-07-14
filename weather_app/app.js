


const today = new Date();
const date = `${today.getFullYear()}-${today.getMonth()+1} ${today.getDate()}`;

const getMinutes =()=>{
    let minutes
    if (today.getMinutes()< 10){minutes = `0${today.getMinutes()}`;}return minutes};

const get12hTime = (time24h)=>{
    if (today.getHours() > 12){
        const time12h = `${today.getHours() - 12} :${today.getMinutes()} PM`
        return time12h
    }
    return `${today.getHours()} :${today.getMinutes()} AM`;
}

console.log(get12hTime())



async function getWeather(place){
    const response = await fetch("http://api.weatherapi.com/v1/current.json?key=da8b7883c24a41ad96493418231007&q=cape town")
    const weatherData = await response.json()

    const location = `${weatherData.location.name}, ${weatherData.location.country}`
    const placeCondition = weatherData.current.condition.text
    const conditionIcon = weatherData.current.condition.icon
    
    
    console.log(weatherData)
}


getWeather("lmao");