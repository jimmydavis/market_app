$(document).ready(function() {

    // $('#market').accordion();

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
  $("#signup").on("submit", createUser);
});


var createUser = function(e) {
  e.preventDefault();
  var email = $("#email").val();


  var newUserParams = {
    user: {
      email: email,
    }
  }
debugger
  $.ajax({
    type: "POST",
    url: "/users.json",
    data: newUserParams
  }).done(function(data) {
  console.log(data);
  $("form")[0].reset();
  // $("#notice").append($("<p>").text("Created " + data.name).delay(2000).fadeOut(400));
});
}
