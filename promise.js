// const greetMessage = function () {
//     return new Promise((resolve, reject) => {
//         resolve("some data");
//         //reject("error data");
//     })
// }

// greetMessage().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

const getTodos = function (url) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener("readystatechange", () => {
            if (request.readyState == 4 && request.status == 200) {
                resolve(JSON.parse(request.responseText));
            }
            else if (request.readyState == 4) {
                reject("could not fetch data");
            }
        });
        request.open("GET", url);
        request.send();
    });
};

//const uri = "https://jsonplaceholder.typicode.com/todos";
const uri = "abhi.json";

getTodos(uri).then(data => {
    console.log(data);
    return getTodos(uri)
}).then(data=>{
    console.log(data);
    return getTodos(uri)
}).then(data=>{
    console.log(data);
})
.catch((err) => {
    console.log(err);
})
