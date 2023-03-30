// console.log("hello");


// //calling specific single reference of html use queryselector
// //const div=document.querySelector("div");//reference of div tag from html page
// //console.log("div");
// // const h1=document.querySelector("h1");
// // console.log(h1);
// // const h2=document.querySelector("h2");
// // console.log(h2);
// // const p=document.querySelector("#para2");//calling by specific id
// // console.log(p);
// // //p.innerText="new para2";

// // const b=document.querySelector("div");
// // let players1=["abc","def","xyz"];
// // html=``;
// // players1.forEach(player=>{
// //     html+=`<p>${player}</p>`
// // });
// //b.innerHTML+=html;//by this all existing and new parameters will be added

// //for calling all elements use selectorall
// // const paras=document.querySelectorAll("p");
// // paras.forEach((para)=>{
// //     console.log(para.innerText);
// // })


// //to find all tag references with class="test" 
// const tags=document.querySelectorAll(".test");
// console.log(tags);
// tags.forEach((tag)=>{
//     console.log(tag.innerText);
// })


// const c=document.querySelector("div.error");//calling specific error class from div
// const d=document.querySelector("p.error");//calling specific error class from p
// console.log(c);
// console.log(d);

// const e=document.getElementById("para2");
// console.log(e);

// const testtags=document.getElementsByClassName("test");
// console.log(testtags);

// //accessing elements of htmlcollections
// Array.from(testtags).forEach(tag=>{
//     console.log(tag);
//     console.log(tag.innerText);
// })


// //appending demo word test class
// const append1=document.getElementsByClassName("test");
// Array.from(append1).forEach((tag)=>{
//     tag.innerText+="demo";
// })
// console.log(append1);


// const append2=document.getElementsByTagName("p");
// console.log(append2);

// const link=document.querySelector("a");
// console.log(link.getAttribute("href"));
// link.setAttribute("href","https:facebook.com");
// link.innerText="facebook";

// const para3=document.getElementById("para2");
// console.log(para3);
// para3.setAttribute("class","success");

// const para4= document.querySelector("h1");
// console.log(para4);
// //para4.setAttribute("class","test1");

// //by this adding new class in existing class
// para4.classList.add("test2");

// para4.classList.remove("test2");

const para0=document.querySelectorAll("p");
para0.forEach(p=>{
    if(p.innerText.includes("success")){
        p.classList.add("success");
    }
    if(p.innerText.includes("error")){
        p.classList.add("error");
    }
})

const div=document.querySelector("div.error");
div.classList.toggle("error");//toogle is used to remove class if found and not found exists than it adds a class
div.classList.toggle("error");//now this will add a class becuase in above we removed and now it is now found

//parent to child
//accessing p tags as child using parent class and appending para to p
const div1=document.querySelector("div");
//console.log(div1.children);
Array.from(div1.children).forEach(c=>{
if(c.tagName=="P"){
    c.innerText+=" para";
}
})

//using parent access child
//accessing p tags as child tag using parent class and appending hello to p tag
const div8=document.querySelector("div");
div8.childNodes.forEach(child=>
    {
        if(child.nodeName=='P'){
            child.innerText+=" hello";
        }
    })

//using child access parent tag
const div7=document.querySelector("h2");
console.log(div7.parentElement);
console.log(div7.nextElementSibling);
console.log(div7.previousElementSibling);
console.log(div7.previousSibling);
console.log(div7.previousSibling);