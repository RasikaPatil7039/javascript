let button = document.querySelector(".button");
let inputvalue = document.querySelector(".inputvalue");
let name = document.querySelector(".name");
let details = document.querySelector(".details");
let temp = document.querySelector(".temp");

button.addEventListener("click", function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=50a7aa80fa492fa92e874d23ad061374')
        .then(response => response.json())
        .then(data => {
            let namevalue=data['name'];
            let tempvalue=data['main']['temp'];
            let detailsvalue=data['weather'][0]['description'];

            this.name.innerHTML=namevalue;
            temp.innerHTML=tempvalue-273.15 +" ° C";
            details.innerHTML=detailsvalue;
        })

        .catch(err => alert("invalid city"));
})


// button.addEventListener("click", function () {
// fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=50a7aa80fa492fa92e874d23ad061374')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => alert("invalid"));
// })