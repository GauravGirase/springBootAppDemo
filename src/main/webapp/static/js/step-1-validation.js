const form = document.getElementById('form');
const first_name = document.getElementById('id_firstname');
const last_name = document.getElementById('id_lastname');
const mobile_phone = document.getElementById('id_phone')
const home_phone = document.getElementById('id_home_phone')


first_name.addEventListener('blur', ()=>{
  var regex = /^[A-Za-z]+$/;
  var dotAlloweregex = /^[A-Za-z.\s]*$/;

  const first_name_val = first_name.value.trim();

  if(first_name_val == ""){
    setErrorMsg(first_name, 'First Name is mandatory');
  }else if(dotAlloweregex.test(first_name_val)){
    setSuccess(first_name);
  }else if(!regex.test(first_name_val)){
    setErrorMsg(first_name, 'msg');
  }else{
      setSuccess(first_name)
  }


  function setErrorMsg(input, errormsg){
  const formControl = input.parentElement;
  formControl.classList.add('error')
   event.preventDefault();

}
function setSuccess(input){
  const formControl = input.parentElement;
  formControl.classList.remove('error')
}
})


last_name.addEventListener('blur', ()=>{

  const last_name_val = last_name.value.trim();

  if(last_name == ""){
    setErrorMsg(last_name, '***msg');
  }else{
      setSuccess(last_name)
  }

  function setErrorMsg(input, errormsg){
  const formControl = input.parentElement;
  formControl.classList.add('error')
   event.preventDefault();

}
function setSuccess(input){
  const formControl = input.parentElement;
  formControl.classList.remove('error')
}
})

mobile_phone.addEventListener('blur', ()=>{
  var numRegex = /^[0-9]*$/;
  const mobile_phone_val = mobile_phone.value.trim();

   if(mobile_phone_val.length > 0 && (!numRegex.test(mobile_phone_val) || mobile_phone_val.length < 10 || mobile_phone_val.length > 10)){
    setErrorMsg(mobile_phone, 'msg');
  } else{
      setSuccess(mobile_phone)
  }

  function setErrorMsg(input, errormsg){
  const formControl = input.parentElement;
  formControl.classList.add('error')
   event.preventDefault();

}
function setSuccess(input){
  const formControl = input.parentElement;
  formControl.classList.remove('error')
}
})


home_phone.addEventListener('blur', ()=>{
  var numRegex = /^[0-9]*$/;
  const home_phone_val = home_phone.value.trim();

   if(home_phone_val.length >0 && (!numRegex.test(home_phone_val) || home_phone_val.length < 10 || home_phone_val.length > 10)){
    setErrorMsg(home_phone, 'msg');
  } else{
      setSuccess(home_phone)
  }

  function setErrorMsg(input, errormsg){
  const formControl = input.parentElement;
  formControl.classList.add('error')
   event.preventDefault();

}
function setSuccess(input){
  const formControl = input.parentElement;
  formControl.classList.remove('error')
}
})


form.addEventListener('submit',(event) => {
  validate();
})
const validate=() => {
  const first_name_val = first_name.value.trim();
  const last_name_val = last_name.value.trim();
  const mobile_phone_val = mobile_phone.value.trim();
  const home_phone_val = home_phone.value.trim();

  var regex = /^[A-Za-z]+$/;
  var dotAlloweregex = /^[A-Za-z.\s]*$/;


  var numRegex = /^[0-9]*$/;

  if(first_name_val == ""){
    setErrorMsg(first_name, 'First Name is mandatory');
  }else if(dotAlloweregex.test(first_name_val)){
      setSuccess(first_name);
  }else if(!regex.test(first_name_val)){
    setErrorMsg(first_name, 'msg');
  }else{
      setSuccess(first_name)
  }

  if(last_name_val == ""){
    setErrorMsg(last_name, 'Msg');
  }else{
      setSuccess(last_name)
  }

  if(mobile_phone_val.length >0 && (!numRegex.test(mobile_phone_val) || mobile_phone_val.length < 10 || mobile_phone_val.length > 10)){
    setErrorMsg(mobile_phone, 'msg');
  } else{
      setSuccess(mobile_phone)
  }

  if(home_phone_val.length >0 && (!numRegex.test(home_phone_val) || home_phone_val.length < 10 || home_phone_val.length > 10)){
    setErrorMsg(home_phone, 'msg');
  } else{
      setSuccess(home_phone)
  }

 }

function setErrorMsg(input, errormsg){
  const formControl = input.parentElement;
  formControl.classList.add('error')
   event.preventDefault();

}

function setSuccess(input){
  const formControl = input.parentElement;
  formControl.classList.remove('error')
}


// preview image
 id_profile_pic.onchange = evt => {
  const [file] = id_profile_pic.files
  console.log(file.type)
  if (String(file.type).slice(0, 6) == 'image/') {
    preview_img.src = URL.createObjectURL(file)
    remove_pic.value=0
  }else{
  $("#file_ext").addClass('show');
  setTimeout(function(){
  $("#file_ext").removeClass('show');
  }, 5000);
return false;
}
}

remove_image.onclick = evt =>{
    preview_img.src = "/images/default-img.svg"
    id_profile_pic.value = null
    remove_pic.value=1
}