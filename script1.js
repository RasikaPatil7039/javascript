//alert("hello world");

//console.log("javascript");

//variables in js
//js is looselytype lang
//js ia an interpreted lan not compiled lang

let value =20;
console.log(value);

value ="rasika";
console.log(value);

// var age=23;
// console.log(age);

const age=30;
console.log(age);

//datatypes in js are:
//number,string,boolean,null,undefined,object

//string
let fname="rasika";
let lname="patil";
let fullname=fname +" "+lname;
console.log(fullname);

console.log(fname[0]);
console.log(fname.toLowerCase());
console.log(fname.toUpperCase());

let email="rasika@gmail.com";
//to get domain name of emailid
console.log(email.substring(email.indexOf("@")+1));
console.log(email.substring(8));
console.log(email.substring(3,5));
console.log(email.slice(3,5));

let result=email.replace("rasika","abc");
console.log(email);
console.log(result);

//template string
const title="programming basic";
const author="abc xyz";
const likes=300;
// const strResult=title+" by "+ author +" has "+likes+" likes";
// console.log(strResult);

//by using template string
const strResult=`${title} by ${author} has ${likes} likes`;
console.log(strResult);

//template string to create html content

let html=`
    <h1>title page<h1>
    <h2>${title}<h2>
    <p>${author}<p>
    <p>${likes}<p>
`;
console.log(html);

//undefined and null

let highscore;
console.log(highscore+100);
console.log(highscore+"abc");

let value1=null;
console.log(value1+100);

//arrays

let players=['rasika','rutuja','krutika'];
console.log(players.length);
console.log(players.indexOf("rutuja"));
players.push("manasi");
console.log(players);

console.log(players.pop());
console.log(players);
console.log(players.includes("rasika"));

//loose vs strict comparision

let age1=30;
let score="30";
console.log(typeof age1);
console.log(typeof score);

console.log(age==30);
console.log(score==score);//loose comparision in which type is ignored

console.log(age===score);//strict has === in this type is not ignored


//type conversion

let score1 ="100";
let test=Number(score1);//in above we declare score1 as string by now we changed to number
console.log(typeof test);

let result1=String(50);
console.log(typeof result1);


//functions
function greet(){
    console.log("hello from function");
}
greet();//to call/print function


function greet(user){
    console.log("hello from function"+user);
}
greet("rasika");


function add(a,b){
    console.log("addition: "+(a+b));
    
}
add(10,20);

function sub(a,b){
    return a-b;
}
console.log("subtraction : "+sub(20,30));

//function expression

const greetings=function(){ 
    console.log("good morning");
};
greetings();

const circlearea=function(radius){
return 3.14*radius*radius
};

console.log(circlearea(10));

//function hoisting
//it means functions can be called before they are defined
//functions are hoisted at the top of the files where as function expression are not
//but function hoisting doesnot support function expression
greet1("abc");

function greet1(user){
    console.log("hello"+user);
}

//default parameters
const speak=function(name="jethalal",time="morning"){
    console.log(name+" says good "+time);
}
speak();
//speak("daya");

//using arrow function
const circlearea1=(radius)=>{
    return 3.14*radius*radius;
    };
console.log(circlearea(10));

const speak1=(name="jethalal",time="morning")=>{
    console.log(name+" says good "+time);
}
speak1();
    
const bill=(products,tax)=>{
    let total=0;
    for(let i=0;i<products.length;i++){
        total+=products[i]+products[i]*tax;
    }
    return total;
};
console.log(bill([10,20,30,40],0.1));

//callback method
//passing a method as an argument

const myfunction=(callbackfunc)=>{
    console.log("inside myfunction");
    callbackfunc(50);
};

myfunction(function(value){
    console.log("callback function called");
    console.log(value);
});


const testfunc=function(callbackfunc){
callbackfunc();
}
testfunc(function(){
    console.log("hello callback");
});


//foreach
let players1=["abc","def","xyz"]
players1.forEach((p,i)=>{
    console.log(p+" "+i);
});

//foreach by using html

const ul=document.querySelector("ul");//takes reference of ultag from html file
html=``;
players1.forEach(player=>{
    html+=`<li>${player}</li>`
});

ul.innerHTML=html;

//OBJECT LITERALS

let user={//object is created inside/using curlybraces{}
    name:"rasika",
    age:23,
    email: "rasika@gmail.com",
    blogs:['js in 2hrs','java in 30mins','html in 15mins']
};
//.notation to access object members
console.log(user);
console.log(user.name);
console.log(user.blogs);
console.log(user.blogs[1]);
console.log(typeof user);
//square bracket nottaion to access object members
console.log(user['blogs'][0]);

let user1={
    name:"rasika",
    age:22,
    email:'rasika@gmail.com',
    blogs:['js in 7days','html basics for beginners'],
    login:function(){
        console.log(this.name+'logged in');
    },
    logout:function(){
        console.log(this.name+'loggedout');
    },
    logblogs:function(){
        this.blogs.forEach(blog=>console.log(blog));
    }
};

user1.login();
user1.logout();
user1.logblogs();

user1.name="ajay";
console.log(user1.name);

//array of objects
let blogs=[
    {
        title:"java in 2 hrs",
        likes:2000
    },
    {
        title:"html ",
        likes:150
    },
    {
        title:"javascipt",
        likes:200
    },
    {
        title:"learn python",
        likes:1000
    }
];
console.log(blogs);

