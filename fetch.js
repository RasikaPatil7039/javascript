//implements promise

console.log(fetch("abhi.json"));


fetch("abhi.json").then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log("some error occured,could not fetch data");
})


//chaining the fetches in single
fetch("abhi.json").then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
    return fetch("abhi.json");
}).then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log("some error occured,could not fetch data");
})

