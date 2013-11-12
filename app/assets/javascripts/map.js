var map = map || {};

maps.makeNycMap = function() {

  var mapOptions = {
    center: new google.maps.LatLng(40.7456373, -73.9081327),
    zoom: 11,
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

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
};

maps.addPins = function() {
  console.log("this will add pins");
};
