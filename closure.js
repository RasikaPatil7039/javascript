//closure is innerfunction as access to variables of the outer function even after the outer function has finished its execution 

function outerFunction(outerVariable){
    
    return function innerFunction(innerVariable){
        console.log("outer variable"+outerVariable);
        console.log("inner variable"+innerVariable);
    }
}
const myfunc=outerFunction("outside");
myfunc("inside");