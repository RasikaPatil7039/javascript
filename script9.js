let row = 1;
let entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

function displayDetails() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let rollno = document.getElementById("rollno").value;
    let email = document.getElementById("email").value;
    if (!name || !age || !rollno || !email) {
        alert("please fill all the boxes");
        return;
    }
    let display = document.getElementById("display");
    let newRow = display.insertRow(row);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);


    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = rollno;
    cell4.innerHTML = email;
    row++;

}
