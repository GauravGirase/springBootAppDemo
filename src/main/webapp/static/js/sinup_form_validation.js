function seterror(id,error){
 id.parentElement.querySelector('label').classList.add("error");
 element = document.getElementById('error-container');
 document.getElementById('sep-bar').classList.add('error');
 element.parentElement.classList.add('d-flex')
 element.innerHTML = error;
}
function seterror2(id1,id2,error){
 id1.parentElement.querySelector('label').classList.add("error");
 id2.parentElement.querySelector('label').classList.add("error");
 element = document.getElementById('error-container');
 document.getElementById('sep-bar').classList.add('error');
 element.parentElement.classList.add('d-flex')
 element.innerHTML = error;
}

function seterrorforcheck(id1,error){
element = document.getElementById('error-container');
element.parentElement.classList.add('d-flex')
element.innerHTML = error;
document.getElementById('check-error').classList.add('error');
}

function setsuccess(){

 element = document.getElementById('error-container');
 element.parentElement.classList.remove('d-flex')
 document.getElementById('sep-bar').classList.remove('error');
 email.parentElement.querySelector('label').classList.remove("error");
}

function setsuccess(){

 element = document.getElementById('error-container');
 element.parentElement.classList.remove('d-flex')
 document.getElementById('sep-bar').classList.remove('error');
 email.parentElement.querySelector('label').classList.remove("error");
 password.parentElement.querySelector('label').classList.remove("error");
 document.getElementById('check-error').classList.add('error');
}


function validateForm(){
var flag = true
var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var form = document.getElementById('post-form');
var email = document.getElementById('id_email');
var email_value = email.value;

var password = document.getElementById('password');
var password_value = password.value;

var check_box = document.getElementById('check-mark');
var check_box_value = check_box.checked;



if(email_value == "" && password_value == ""){
  seterror2(email,password,'Fields cannot be blank..!');
  flag = false;
   return flag;
}else if(email_value == ""){
   seterror(email,'email field cannot be blank');
   flag = false;
   return flag;
}else if(password_value == ""){
   seterror(password,'password field cannot be blank');
   flag = false;
   return flag;
}else if(password_value.length < 8){
   seterror(password,'password should be min of 8 char');
   flag = false;
   return flag;
}else if(!regex.test(email_value)){
   seterror(email,'Please enter a valid email address');
   flag = false;
   return flag;
}else if(!check_box_value){
   seterrorforcheck(check_box,'You must agree to the Terms of Service & Privacy policy');
   flag = false;
   return flag;
}else{
    setsuccess()
    flag = true;
    return flag;
}

}
