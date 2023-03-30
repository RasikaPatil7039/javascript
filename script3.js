
const addbutton=document.querySelector("button");
const ul=document.querySelector("ul");

// addbutton.addEventListener("click",e=>{
//     const li=document.createElement("li");
//     li.innerText="new player";
//     ul.appendChild(li);

// })



// html='';

// addbutton.addEventListener("click",e=>{
//     html+='<li>new player</li>';
//     ul.innerHTML+=html;
//     html='';
// });


// const list=document.querySelectorAll("li");
// //console.log(list);
// list.forEach(l=>{
//     l.addEventListener('click',e=>{
//         console.log(l.innerText);
//     })
// })


// list.forEach(li=>{
//     li.addEventListener('click',e=>{
//         e.target.remove();
//     })
// })



//using parent reference deleteting each listname
ul.addEventListener('click',e=>{
    if(e.target.localName=='li')
    e.target.remove();
})


const input=document.querySelector("input");
const btn=document.querySelector("button");
btn.addEventListener("click",e=>{
    if(input.value!=""){
        const li=document.createElement("li");
        li.innerText=input.value;
        ul.appendChild(li);
    input.value="";
    }
    else{
        alert("enter player")
    }
    })

 
