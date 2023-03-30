function validateForm(){
    const name = document.getElementById("n1")
    const email = document.getElementById("e1")
    const age = document.getElementById("a1")
    const phoneNo = document.getElementById("ph1")
    const password = document.getElementById("p1")
    const confirmpass = document.getElementById("c1")
  
   validateName(name)
   validateEmail(email)
   validateAge(age.value)
   validatePhoneNo(phoneNo.value)
   validatePassword(password.value)
   validateconfirmpassword(confirmpass.value,password.value)  
}

function validateName(name){
    var expr = /^[0-9a-zA-Z]+$/
    if(name.value.match(expr)&& name!=""){
        return true
    
    }
    else{
        alert("invalid name")
        return false
    }
}

function validateEmail(email){
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{3,4})$/;
    if(email.value.match(mailformat)&& email!=""){
        return true
    }
    else{
        alert("invalid email")
        return false
    }
}

    function validateAge(age){
        if(age> 0 && age<100 && age!=""){
            return true

        }    
        else{
            alert("invalid age")
        }
        }

function validatePassword(password){
    var pswd=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (password.match(pswd) && password != "") {
    }
    else {
        alert(" Password Invalid")
    }

    }


    function validateconfirmpassword(password,confirmpass){
        if(password===confirmpass&& confirmpass!=""){
            return true
        }
            else{
                alert("Password and Confirm Password must match");
                return false;
            }
    }


    function validatePhoneNo(phoneNo){
        var phoneformat=  /^\(?([7-9]{3})\)?([0-9]{3})?([0-9]{4})$/;
        if (phoneNo.match(phoneformat) && phoneNo != "") {
        }
        else {
            alert("Invalid Phone No")
        }
    }

// function ValidateConfirmPassword(Confirmpassword,password){
//     if (password===Confirmpassword  && Confirmpassword!="") {

//     }
         
//     else{
//         alert("Password and Confirm Password must match");
//         return false;
//     }
// }