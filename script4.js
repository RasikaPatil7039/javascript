const input=document.querySelector('#txt');
const button=document.querySelector(".btn-list");
const list=document.querySelector(".container ul");
button.addEventListener('click',(e)=>{
    if(input.value!=""){
        e.preventDefault();
        //create list
        const myli=document.createElement('li');
        myli.innerHTML=input.value;
        list.appendChild(myli);

        //create span
        const myspan=document.createElement('span');
        myspan.innerHTML=`<i class="fa fa-trash" aria-hidden="true"></i>`;
        myli.appendChild(myspan);
    }
    const close=document.querySelectorAll('span');//to close
    for(let i=0;i<close.length;i++){
        close[i].addEventListener('click',()=>{
            close[i].parentElement.style.display="none";
        })
    }
    input.value="";
})
