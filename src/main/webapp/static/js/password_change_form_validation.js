function seterror(id,error){
 element = document.getElementById('error-container');
 element.parentElement.classList.add('d-flex')
 element.innerHTML = error;
}

function setsuccess(){

 element = document.getElementById('error-container');
 element.parentElement.classList.remove('d-flex')

}

function validatePasswordChangeForm(){
var flag = true
var form = document.getElementById('password-change');
var password = document.getElementById('password');
var password1 = document.getElementById('password1');

var password_value = password.value;
var password_value1 = password1.value;



if(password_value == ""){
   seterror(password,'Please enter valid password');
   flag = false;
   return flag;
}else if(password_value == "" || password_value1 == "" ){
   seterror(password,'Please enter valid password');
   flag = false;
   return flag;
}else if(password_value.length < 8 || password_value1.length < 8 ){
   seterror(password,'A minimum 8 characters, containing a combination of uppercase,lowercase letters and numbers');
   flag = false;
   return flag;
}else{
    setsuccess()
    flag = true;
    return flag;
}
}
