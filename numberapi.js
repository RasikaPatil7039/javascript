const startF = async (input1) => {
    const response = await fetch("http://numbersapi.com/" + input1);
    if (response.status != 200) {
        throw new Error("Invalid url");
    }
    const data = await response.text();
    return data;
};

const addBtn = document.querySelector("button");
addBtn.addEventListener("click", () => {
    const input1 = document.querySelector("#one").value;
    if (input1 != "") {
        startF(input1).then((data) => {
            console.log(data);
            funcToAdd(data,input1);
        })
        .catch(err => {
            console.log("Could not fetch data " + err);
        })
    }
    else {
        alert("Please enter something.");
    }
});


//to get date and time
function funcToAdd(data,input1) {
    document.querySelector("#two").value = data;

    const date = new Date();
    var current_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    var current_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var date_time = current_date + " " + current_time;

    localStorageAdd(data, date_time,input1);
}

function localStorageAdd(data, date, input1) {
    console.log(input1);
    if (localStorage.getItem(input1) != null) {
        const valData = JSON.parse(localStorage.getItem(input1));
        document.querySelector("#three").value = valData[0].date;
        document.querySelector("#four").value = valData[0].msg;
    }
    else {
        document.querySelector("#three").value = "None";
        document.querySelector("#four").value = "None";
    }

    const val = [
        {
            date: date,
            msg: data
        }
    ];
    localStorage.setItem(input1, JSON.stringify(val));
}





