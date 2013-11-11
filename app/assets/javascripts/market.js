$(document).ready(function() {
    $('#market').accordion();

$(".login-btn").hover(
    function() {
        clearTimeout($(this).data('hoverTimeoutId'));
        $(".login-content").show();
        $(this).addClass('hovered');
    },
    function() {
        clearTimeout($(this).data('hoverTimeoutId'));
        $(this).data('hoverTimeoutId', setTimeout(function () {
            $(".login-content").hide();
            $(this).removeClass('hovered');
        } ,500));
    });


$('.login-content').hover(
    function(){
        clearTimeout($(".login-btn").data('hoverTimeoutId'));
    },
    function(){
        $(".login-content").hide();
        $(".login-btn").removeClass('hovered');
    });

// Can probably refactor this since it is the same for both login and signup

$(".signup-btn").hover(
    function() {
        clearTimeout($(this).data('hoverTimeoutId'));
        $(".signup-content").show();
        $(this).addClass('hovered');
    },
    function() {
        clearTimeout($(this).data('hoverTimeoutId'));
        $(this).data('hoverTimeoutId', setTimeout(function () {
            $(".signup-content").hide();
            $(this).removeClass('hovered');
        } ,500));
    });


$('.signup-content').hover(
    function(){
        clearTimeout($(".signup-btn").data('hoverTimeoutId'));
    },
    function(){
        $(".signup-content").hide();
        $(".signup-btn").removeClass('hovered');
    });

});


