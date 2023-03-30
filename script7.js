const getTodos = function (callback, url) {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if (request.readyState == 4 && request.status == 200) {
            callback(undefined, JSON.parse(request.responseText));
            // console.log(request.responseText);
        }
        else if (request.readyState == 4) {
            //console.log("could not fetch data");
            callback("could not fetch data", undefined);
        }
    });

    request.open("GET", url);
    request.send();
};

//const uri = "https://jsonplaceholder.typicode.com/todos";
const uri="abhi.json";
getTodos((err, data) => {
    if (err) {
        console.log("error!!!:" + err);
    }
    else {
        console.log(data);
    }
}, uri);

