function seterror(id,error){
 element = document.getElementById('error-container');
 element.parentElement.classList.add('d-flex')
 element.innerHTML = error;
}

function setsuccess(){

 element = document.getElementById('error-container');
 element.parentElement.classList.remove('d-flex')

}

function validatePasswordForm(){
var flag = true
var form = document.getElementById('password-reset');
var password = document.getElementById('password');
var password_value = password.value;


if(password_value == ""){
   seterror(password,'password field cannot be blank');
   flag = false;
   return flag;
}else if(password_value.length < 8){
   seterror(password,'password should be min of 8 char');
   flag = false;
   return flag;
else{
    setsuccess()
    flag = true;
    return flag;
}
}
