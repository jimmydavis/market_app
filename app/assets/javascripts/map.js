var googleMap = googleMap || {};

// creates a nyc map after dom load
googleMap.createMap = function() {

  var mapOptions = {
    center: new google.maps.LatLng(40.7397346, -73.9897422),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

};


// adds pins to the map for each of the market points
googleMap.addPins = function() {
  console.log("this will add pins");
};



// =========================================================================================
//    CALLS FUNCTIONS WHEN DOM HAS LOADED
// =========================================================================================

$(document).ready(function() {

  googleMap.createMap();
  googleMap.addPins();

});


