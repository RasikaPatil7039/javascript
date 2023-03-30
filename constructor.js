// using constructor function
function User(firstName, lastName, emailId, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailId = emailId;
    this.age = age;
    this.getFullName = function (){
        return this.firstName + " " + this.lastName;
    }
}

var user1 = new User('rasika', 'patil', 'rasika@gmail.com', 22);
var user2 = new User('krutika', 'bane', 'krutika@gmail.com', 40);

// Print objects
console.log(user1);
console.log(user2);


// access properties
console.log(user1.firstName);
console.log(user1.lastName);

// calling method
console.log(user1.getFullName());