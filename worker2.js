const sumbutton = document.querySelector("#sum");
const colorbutton = document.querySelector("#color");
//workerthread created
const worker=new Worker("webworker.js");

sumbutton.addEventListener('click',()=>{
    //to call webworker
    worker.postMessage("test");
});

//to access get result of postmessage()webworker
worker.onmessage=(result)=>{
    alert("sum is "+result.data);
}
colorbutton.addEventListener('click', (e) => {
    if (document.body.style.backgroundColor != "green") {
        document.body.style.backgroundColor = "green";
    }
    else {
        document.body.style.backgroundColor = "cyan";
    }
})