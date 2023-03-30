//console.log("hiiii");

const scores=[10,20,30,40,50,60,61,55];
//filter out no. gretaer than 30
const filterscore=scores.filter((score)=>{
    return score>30;
});
console.log(filterscore);


let newscore=[];
for(let i=0,j=0;i<scores.length;i++){
    if(scores[i]>30){
        newscore[j++]=scores[i];
    }
}
console.log(newscore);


//toprint evenno
const filterscore1=scores.filter((score)=>{
    return score%2==0;
});
console.log(filterscore1);

let newscore1=[];
for(let i=0,j=0;i<scores.length;i++){
    if(scores[i]%2==0){
        newscore1[j++]=scores[i];
    }
}
console.log(newscore1);



const users=[
    {
        name:"abhishek",
        premium:false
    },
    {
        name:"rasika",
        premium:true
    },
    {
        name:"krutika",
        premium:false
    },
    {
        name:"amogh",
        premium:true
    }
]

const premiumusers=users.filter(user=>{
    return user.premium
});
console.log(premiumusers);



const products=[
    {
        name:"parleg",
        price:300
    },
    {
        name:"marie",
        price:20
    },
    {
        name:"maggi",
        price:100
    },
    {
        name:"chocolate",
        price:260
    }
]

const price=products.filter(p=>{
    return p.price>100;
})
console.log(price);

const increaseprice=products.map((n)=>{
    return {
        name:n.name,
        price:n.price+(n.price*0.10)
    }
});
console.log(increaseprice);



const number=[1,5,7,10,6];
const numsqu=number.map((n)=>{
    return n*n;
});
console.log(numsqu);

//reducemethod
const values=[12,23,50,6,78,67,40];
const sum=values.reduce((acc,val)=>{
    return acc+val;
},0);
console.log(sum);

const player=[
    {
        name:"sachin",
        score:23

    },
    {
        name:"rohit",
        score:43

    },
    {
        name:"virat",
        score:33

    },
    {
        name:"dhoni",
        score:50

    },
    {
        name:"sachin",
        score:50

    }
]

const sachinsum1=player.reduce((acc,player)=>{
   if(player.name=='sachin'){
    return acc+player.score
   }
   return acc;
},0);
console.log(sachinsum1);


const sachinsum2=player.filter((players1)=>{
    return players1.name=='sachin'
}).reduce((acc,players1)=>{
    return acc+players1.score;
},0);
console.log(sachinsum2);



//find
const marks=[21,34,3,44,47,60,38];
const testmark=marks.find((mark)=>{
    return mark>40;
})
console.log(testmark);


//sort
const sortedmarks=marks.sort((num1,num2)=>{
return num1-num2;
});
console.log(sortedmarks);


const pricesort=products.sort((num1,num2)=>{
    return  num1.price-num2.price;
});
console.log(pricesort);



const discountprice=products.filter((n)=>{
    return n.price>200; 
}).map((n)=>{
    return{
        name:n.name,
        price:n.price-n.price*0.2
    }
}).sort((p1,p2)=>{
    return p1.price-p2.price;
});
console.log(discountprice);
