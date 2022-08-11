//Complete the Weather API Backend part using openweathermap api
function getWeather(cityName){
    var key = '7361e6a431124b3243741dd60496ee3c';
    axios.get('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&units=metric&appid='+key)
    // https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=7361e6a431124b3243741dd60496ee3c
    .then(function(resp){
        return resp.data;
    })
    .then(function(data){
        console.log(data)
        document.querySelector(".city").innerHTML = data.name + " " + data.sys.country;
        const dt = data.dt;
        console.log(dt)
        var day = new Date(dt*1000)
        document.querySelector(".date").innerHTML = day.toDateString()
        document.querySelector(".temp").innerHTML = data.main.temp + " °c"
        document.querySelector(".weather").innerHTML = data.weather[0].main
        document.querySelector('.hi-low').innerHTML = data.main.temp_min + " °c"+ " /" + data.main.temp_min + " °c"
    })
    .catch(function(err){
        console.log(err);
    })
}

function search(){
    var city = document.querySelector(".search-box").value
    getWeather(city)
}