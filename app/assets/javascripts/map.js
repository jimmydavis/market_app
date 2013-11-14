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

  // ajax get for all users
  $.ajax({
    dataType: "json",
    type: "GET",
    url: "/markets"
  }).done(function(markets){
    // iterates through each of the market in the markets object
    $.each(markets, function(i, market){
      var marketName = market.market_name;
      var marketId = market.id;
      var marketLocation = market.location;

      // adds a location for each market and gives it some attributes
      var marketLatLng = new google.maps.LatLng(market.latitude, market.longitude);
      var marker = new google.maps.Marker({
        position: marketLatLng,
        title: marketName + ": " + marketLocation
      });
      // creates a marker for a market and sets it on the map defined in above fn
      marker.setMap(map);
      // eventlistener for each marker

      google.maps.event.addListener(marker, "click", function() {
        $(".info-text").addClass("hidden");
        $("#favorite-button").removeClass("hidden");
        $(".market").html(
                      "Name: " + marketName + '<br />'
                      + market.address_line_1 + '<br />'
                      + market.operation_hours + '<br />'
                      + market.operation_season + '<br />'
                      + market.market_link
                      );
        $("#favorite-button").on("click", function(e){
          var favData = { user_id: $("#favorite-button").data("user_id"), market_id: marketId };
          debugger
          $.ajax({
            dataType: "json",
            type: "POST",
            url: "/favorites.json",
            data: favData
            // user_id, market.id
          }).done
        });
      });
    });
  });
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

