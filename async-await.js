// const func=async()=>{

//     const response=await fetch("http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students");
//     if(response.status!=200){
//         throw new Error("invalid url");
//     }
//     const data=await response.json();
//     return data;
// };
// func().then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log("could not fetch "+err);
// });


// //chaining
// // const func1=async()=>{

// //     const response=await fetch("abhi.json");
// //     const data=await response.json();
// //     console.log(data);

// //     const response1=await fetch("abhi.json");
// //     const data1=await response1.json();
// //     return data1;
// // };
// // func().then(data=>{
// //     console.log(data);
// // })

// //to fetch api info and store in table format
// fetch("http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students")
// .then((response)=>response.json()).then((json)=>{
//     let li=`<tr><th>id</th><th>Name</th><th>rollNo</th></tr>`;

// json.forEach((student) => {
//     li += `<tr>
//       <td>${student.id}</td>
//       <td>${student.name} </td>
//       <td>${student.rollNo}</td>
      
//     </tr>`;
//   });

//   // 4. DOM Display result
//   document.getElementById("student").innerHTML = li;
// });




function startF() {
    const func = async () => {
        const response = await fetch("http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students");
        if (response.status != 200) {
            throw new Error("Invalid url");
        }
        const data = await response.json();
        return data;
    };
    
    func().then((data) => {
        console.log(data);
        funcToAdd(data);
    }).catch(err => {
        console.log("Could not fetch data " + err);
    })
    
    const table = document.querySelector("table");

    const funcToAdd = (data) => {
        let html = ``;
        table.innerHTML = html;
        data.forEach(d => {
            html = `<tr>
            <td>${d.rollNo}</td>
            <td>${d.name}</td>
            <td>${d.age}</td>
            <td>${d.email}</td>        
            <td><button class="btn btn-primary" id="${d.id}" value="Delete" onclick="deleStudent(this)"> Delete </button></td>
            </tr>`
            table.innerHTML += html;
        });
    }
}
startF();

const form = document.querySelector("#myForm");
let name = document.querySelector("#name");
let rollNo = document.querySelector("#roll");
let age = document.querySelector("#age");
let email = document.querySelector("#email");

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newStudent = {
        rollNo: rollNo.value,
        name: name.value,
        age: age.value,
        email: email.value
    };
    // let html = ``;
    // html = `<tr>
    //     <td>${newStudent.rollNo}</td>
    //     <td>${newStudent.name}</td>
    //     <td>${newStudent.age}</td>
    //     <td>${newStudent.email}</td>        
    //     <td><button class="btn btn-primary" id="${newStudent.id}" value="Delete" onclick="deleStudent(this)"> Delete </button></td>
    //     </tr>`
    // table.innerHTML += html;
    const createdStudent = await createStudent(newStudent);
    console.log(createStudent);
});

const createStudent = async (s) => {
    const response = await fetch("http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students", {
        method: 'POST',
        body: JSON.stringify(
            {
                rollNo: s.rollNo,
                name: s.name,
                age: s.age,
                email: s.email
            }
        ),
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    });
    const student = await response.json();
    startF();
    return student;
};

function deleStudent(student) {

    var url = "http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students";
    var id = student.id;
    fetch($,{url}/$,{id}, {
        method: 'DELETE'
    })
        .then(res => res.json)
    var node = student.parentNode.parentNode;
    node.remove()
}

