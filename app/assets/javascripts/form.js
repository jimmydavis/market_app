$(document).ready(function() {


// When you click on "LOG IN" link in header
// it will toggle the form to log in
$(".login").on("click", function(e) {
  e.preventDefault();
  $("fieldset#login_menu").toggle();
  $(".login").toggleClass("menu-open");
});
$("fieldset#login_menu").mouseup(function() {
  return false
});
$(document).mouseup(function(e) {
  if($(e.target).parent("a.login").length==0) {
    $(".login").removeClass("menu-open");
    $("fieldset#login_menu").hide();
  }
});

// When you click on "SIGN UP" link in header
// It toggles the sign up form
$(".signup").on("click", function(e) {
  e.preventDefault();
  $("fieldset#signup_menu").toggle();
  $(".signup").toggleClass("menu-open");
});
$("fieldset#signup_menu").mouseup(function() {
  return false
});

$(document).mouseup(function(e) {
  if($(e.target).parent("a.signup").length==0) {
    $(".signup").removeClass("menu-open");
    $("fieldset#signup_menu").hide();
  }
});

});
  // When you click the sign up button on the form
  // It should create a new user in the database
  $("#signup_form").on("submit", createUser);

var createUser = function(e) {
  e.preventDefault();
  var email = $("#signup_email").val();
  var pWord = $("#signup_password").val();
  var pWordConfirmation = $("#password_confirmation").val();

  var newUserParams = {
    user: {
      email: email,
      password: pWord,
      password_confirmation: pWordConfirmation
    }
  };

  $.ajax({
    type: "POST",
    url: "/users.json",
    data: newUserParams
  }).done(function(data) {
    console.log(data);
    $("#signup_form")[0].reset();
});
};

// This function makes flash notices fade in and fade out after logging in/out
$(function() {
   $('#flash_notice').delay(500).fadeIn('normal', function() {
      $(this).delay(1000).fadeOut();
   });
});
