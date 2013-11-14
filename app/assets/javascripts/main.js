$(document).ready(function() {

  // maps.makeNycMap();
  // maps.addPins();

  // event listener

});


// function

  $(function() {
    $( "#slider" ).slider({
      value:365,
      min: 1,
      max: 365,
      step: 1,
      slide: function( event, ui ) {
        $( "#date" ).val(ui.value );
      }
    });
    $( "#date" ).val( $( "#slider" ).slider( "value" ) );
  });
