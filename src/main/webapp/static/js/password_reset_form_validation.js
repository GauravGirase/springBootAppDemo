function seterror(id,error){
 element = document.getElementById('email-error-container');
 element2 = document.getElementById('error-sym');
 element2.classList.add('icon-information');
 element2.classList.add('mr-2');
 element.innerHTML = error;
}

function setsuccess(){

 element = document.getElementById('email-error-container');
 element.parentElement.classList.remove('d-flex')
 password.parentElement.querySelector('label').classList.remove("error");
 element2 = document.getElementById('error-sym');
 element2.classList.remove('icon-information');

}

function validatePasswordResetForm(){
    var flag = true
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var form = document.getElementById('pass_reset');
    var email = document.getElementById('reset_email');
    var email_value = email.value;


    if(email_value == ""){
       seterror(email,'email field cannot be blank');
       flag = false;
       return flag;
    }else if(!regex.test(email_value)){
       seterror(email,'Please enter a valid email address');
       flag = false;
       return flag;
    }else{
        setsuccess()
        flag = true;
        return flag;
    }

}
