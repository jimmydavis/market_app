// ================================================================
// DOCUMENT ON READY
// ================================================================

$(document).ready(function() {

  // When you click on the "LOG IN" link in header
  // it will toggle the form to the log in
  $(".login").on("click", function(e) {
    e.preventDefault();
    $("fieldset#login_menu").toggle();
    $(".login").toggleClass("menu-open");
  });

  $("fieldset#login_menu").mouseup(function() {
    return false;
  });

  $(document).mouseup(function(e) {
    if( $(e.target).parent("a.login").length==0 ) {
      $(".login").removeClass("menu-open");
      $("fieldset#login_menu").hide();
    }
  });

  // When you click on the "SIGN UP" link in header
  // It toggles the sign up form
  $(".signup").on("click", function(e) {
    e.preventDefault();
    $("fieldset#signup_menu").toggle();
    $(".signup").toggleClass("menu-open");
  });
  // so when you move the mouse off the form, it stays in view
  $("fieldset#signup_menu").mouseup(function() {
    return false;
  });

  $(document).mouseup(function(e) {
    if( $(e.target).parent("a.signup").length==0 ) {
      $(".signup").removeClass("menu-open");
      $("fieldset#signup_menu").hide();
    }
  });

  // When you click the sign up button on the form
  // It will create a new user in the database
  $("#signup_form").on("submit", createUser);

});

// ================================================================
// This function makes flash notices fade in and fade out after logging in/out
// Or for trying to perform a feature that is not yet available
// ================================================================

$(function() {
 $('#flash_notice').delay(500).fadeIn('normal', function() {
  $(this).delay(2000).fadeOut();
});
});

$(function() {
  $("#favorites-button-show-page").on("click", function() {
      $("#notice_container").text("We're sorry... This feature is currently not available!").fadeIn(500).delay(2000).fadeOut();
  });
});


// ================================================================
// FUNCTIONS
// ================================================================
function createUser(e) {
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
    })
    .done(function(data) {
      console.log(data);
      $("#notice_container").text("Welcome! You have successfully signed up!").fadeIn(500).delay(2000).fadeOut();
    })
    .fail(function(xhrResponse, textStatus, errorThrown){
      console.log("fail");
      console.log(xhrResponse, textStatus, errorThrown);
      // error for password not matching the password confirmation
      if (xhrResponse.responseJSON.password) {
        $("#notice_container").text("Password " + xhrResponse.responseJSON.password[0] + ". Please try again.").fadeIn(500).delay(2000).fadeOut();
        // error for trying to signup with an email that already exists in database
      } else if (xhrResponse.responseJSON.email){
        $("#notice_container").text("This email is already registered, please login.").fadeIn(500).delay(2000).fadeOut();
        // flash this message for any other errors while signing up
      } else {
        $("#notice_container").text("OOPS...there was some sort of error, please try again.").fadeIn(500).delay(2000).fadeOut();
      }
    });
    $("#signup_form")[0].reset();
  };
