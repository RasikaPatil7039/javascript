//by modules in js we can create classes and methods and export it,so that it can be imported and used in other js files
class User{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
function printName(user){
    console.log("user name: "+user.name);
}
function printAge(user){
    console.log("user age: "+user.age);
}

export default User;
export{printName,printAge};