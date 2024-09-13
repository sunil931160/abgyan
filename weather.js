const apiKey = 'd1f02d93eec7504c93696307c557b61a';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function checkWeather(city){
    let response= await fetch(apiUrl + city + "&appid=d1f02d93eec7504c93696307c557b61a");

    let data= await response.json();
    console.log(data)

    document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("humi").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.wind.speed + "km/h";


    document.querySelector(".weather").style.display = "block";
}

let btn=document.getElementById("btn");
let inputBox=document.getElementById("inp");


btn.addEventListener("click", () =>{
    checkWeather(inputBox.value);

})






