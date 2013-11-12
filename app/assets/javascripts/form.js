$(document).ready(function() {

    // $('#market').accordion();

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



$(document).ready(function(){
  // When you click the sign up button on the form
  // It should create a new user in the database
  $("#signup_form").on("submit", createUser);
});


var createUser = function(e) {
  e.preventDefault();
  var $email = $("#signup_email").val();


  var newUserParams = {
    user: {
      email: $email,
    }
  }
  $.ajax({
    type: "POST",
    url: "/users.json",
    data: newUserParams
  }).done(function(data) {
    console.log(data);
    // $("form")[0].reset();
  // $("#notice").append($("<p>").text("Created " + data.name).delay(2000).fadeOut(400));
});
}