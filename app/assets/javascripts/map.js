var googleMap = googleMap || {};

// creates a nyc map after dom load
googleMap.createMap = function() {

  var mapOptions = {
    center: new google.maps.LatLng(40.7397346, -73.9897422),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [
    {featureType:'road',elementType:'geometry',stylers:[{'visibility':'simplified'}]},
    {featureType:'road.arterial',stylers:[{hue:149},{saturation:-78},{lightness:0}]},
    {featureType:'road.highway',stylers:[{hue:-31},{saturation:-40},{lightness:2.8}]},
    {featureType:'poi',elementType:'label',stylers:[{'visibility':'off'}]},
    {featureType:'landscape',stylers:[{hue:163},{saturation:-26},{lightness:-1.1}]},
    {featureType:'transit',stylers:[{'visibility':'off'}]},
    {featureType:'water',stylers:[{hue:3},{saturation:-24.24},
    {lightness:-38.57}]}
    ]
  };

  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

};


// adds pins to the map for each of the market points
googleMap.addPins = function() {

  var myLatlng = new google.maps.LatLng(40.7397346, -73.9897422);

  var marker = new google.maps.Marker({
    position: myLatlng,
    title:"Hello World!"
  });

  marker.setMap(map);
};

// ###########################################################################################
//      TODO
// ###########################################################################################
  // in addPinsfn ajax get request for all markets
  // -- use that data to create markets in a for loop
  // -- create a hover eventListener that will display neighborhood and number of markets in popup

  // create a function to pull data for a specific neighborhood
  // display it in the LHB






// =========================================================================================
//    CALLS FUNCTIONS WHEN DOM HAS LOADED
// =========================================================================================

$(document).ready(function() {

  googleMap.createMap();
  googleMap.addPins();

});


