// Select Box Dropdown custom select 2

$(document).ready(function () {
  $(".select-single").select2({
    allowClear: false,
    minimumResultsForSearch: -1,
    // dropdownParent: $('.form-field')
  });
});

var mybutton = document.getElementById("add-comment-sticky");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 845) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}


function toggle(button) {
  var password = document.getElementById("changePassword");
  if (password.type == "password") {
      button.innerHTML = "Hide";
      password.type = "text";
  }
  else {
      button.innerHTML = "Show";
      password.type = "password";
  }
}
