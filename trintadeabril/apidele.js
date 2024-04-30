function fechclima(){
    fetch('https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}')
    .then(Response => Response.json);
}