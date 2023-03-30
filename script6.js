// console.log(1);
// console.log(2);
// console.log(3);

// //asynchronousmethod //timetaking task will be executed after all other task 
// setTimeout(()=>{
//     console.log("callback function called..");
// },2000);

// console.log(4);
// console.log(5);
// console.log(6);



//XHR(xmlhttprequest)
//makes request to get data from api endpoints
/*readystate
0:unsent
1:open
2:received headers
3:loading
4:complete
 */


const getTodos = function (url) {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if (request.readyState == 4 && request.status == 200) {
            console.log(request.responseText);
        }
        else if (request.readyState == 4) {
            console.log("could not fetch data");
        }
    });

    request.open("GET", url);
    request.send();
};

getTodos("https://jsonplaceholder.typicode.com/todos");