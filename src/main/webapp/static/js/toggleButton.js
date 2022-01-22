function myFunction(button) {
  var x = document.getElementById("password");
  if (x.type === "password") {
    button.innerHTML = "Hide";
    x.type = "text";
  } else {
    button.innerHTML = "Show";
    x.type = "password";
  }
}

var message_ele_one = document.getElementById("msg");
setTimeout(function(){
$("#msg").removeClass('show');
}, 5000);

//signup page messages(success)
var message_ele_two = document.getElementById("msg2");
setTimeout(function(){
$("#msg2").removeClass('show');
}, 5000);

//onboarding messages(success)

var message_ele_three = document.getElementById("msg3");
setTimeout(function(){
$("#msg3").removeClass('show');
}, 5000);

var message_ele_three = document.getElementById("msg5");
setTimeout(function(){
$("#msg5").removeClass('show');
}, 5000);

var message_ele_four = document.getElementById("msg6");
setTimeout(function(){
$("#msg6").removeClass('show');
}, 5000);
