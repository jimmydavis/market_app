var width = 650,
    height = 800;

var sliderPosition = null;
var startDate = new Date(2012,11,31);
var currentDate = new Date();
var currentPosition = Math.floor((currentDate - startDate) / 86400000);
$("label[for=date]").text(moment(currentDate).format("dddd, MMMM Do YYYY"));

var boroughs =
[
    {"name": "MANHATTAN", "lat": 40.792556, "lon": -73.997774},
    {"name": "BROOKLYN", "lat": 40.644381,"lon": -73.977452},
    {"name": "BRONX", "lat": 40.837049, "lon": -73.895430},
    {"name": "QUEENS", "lat": 40.721212, "lon": -73.853649}
];

var svg = d3.select("#map-canvas").append("svg")
    .attr("width", width)
    .attr("height", height);

d3.json("/boroughs.json", function(error, data) {

    // console.log(data);
    var group = svg.selectAll("g")
    // take data and objects nyc boros and take that features property for that
        .data(topojson.feature(data, data.objects.new_york_city_boroughs).features)
        // .data(topojson.feature(data, data.objects.subunits).features)
        .enter()
        .append("g");

    var projection = d3.geo.mercator()
        .center([-73.87, 40.714])
        .translate([width/2, height/2])
        .scale([99000]);

    var path = d3.geo.path().projection(projection);

    var areas = group.append("path")
        .attr("d", path)
        .attr("class", "area")
        .attr("fill", "#7A8B8B");



        d3.json("/markets.json", function(error, data) {

            console.log(data);
            allMarkets = data;

            function moveIt(event, ui) {
                var currentDate = moment(startDate).add('days', ui.value);
                sliderPosition = ui;

                $("label[for=date]").text(moment(currentDate).format("dddd, MMMM Do YYYY"));

                var mkt = group.selectAll(".circle")
                    .data(allMarkets[ui.value]);

                $(".circle").remove();

                mkt.enter()
                    .append("circle")
                    .attr("class", "circle")
                    .attr("cx", function(d) {
                            return projection([d.longitude, d.latitude])[0];
                    })
                    .attr("cy", function(d) {
                            return projection([d.longitude, d.latitude])[1];
                    })
                    // .attr("r", 12)
                    .attr("r", 12)
                    .attr("opacity", "0.25")
                    .style("fill", "#ffffff")
                    .text(function(d) { return d.market_name })


                    // click event listener for each market's
                    .on("click", function(d) {

                        d3.selectAll(".circle").attr("opacity", "0.25").style("fill", "#ffffff");

                        var mktName = d;
                        d3.select(this).style("fill", null);

                        $(".market").fadeOut(500, function() {
                                d3.select(".market")
                                    .html(mktName.market_name + "<br>" + mktName.neighborhood + "<br>" + mktName.operation_hours + "<br> Open " + mktName.operation_season + "<br>" + "<a href=" + "/markets/" + mktName.markets_id + ">More info ...</a>");
                                    $(".market").fadeIn(500);
                        });
                    });
            }
                            //     d3.selectAll(".circle").attr("opacity", "0.25").style("fill", "#ffffff");

                            //     var mktName = d;
                            //     d3.select(this).style("fill", null);
                            //     $(".market").fadeOut(500, function() {
                            //             d3.select(".market")
                            //                 .html(mktName.market_name + "<br>" + mktName.neighborhood + "<br>" + mktName.operation_hours + "<br> Open " + mktName.operation_season + "<br>" + "<a href=" + "/markets/" + mktName.markets_id + ">More info...</a>");
                            //                 $(".market").fadeIn(500);
                            //         });
                            // });

                    // creates the slider
                    $( "#slider" ).slider({
                        value: currentPosition,
                        min: 1,
                        max: 365,
                        step: 1,
                        change: moveIt,
                        slide: moveIt

                        // mkt.exit().remove();
                      });
        var playInterval;
        var autoRewind = true;

        // Thank you to the guy who created this — http://jsfiddle.net/amcharts/ZPqhP/
        $('#play-button').click(
        function(){
          // if (sliderPosition !== null)
          //   currentPosition = sliderPosition;
          if (playInterval !== undefined){
              clearInterval(playInterval);
              playInterval = undefined;
              $(this).html("play");
              return;
            }
          $(this).html("pause");
          playInterval = setInterval(function(){
            currentPosition++;
            if (currentPosition > 365){
              if (autoRewind){
                currentPosition = 1;
              }
              else {
                clearInterval(playInterval);
                return;
              }
            }
            setSlide(currentPosition);
          }, 200);
        });

        function setSlide(i) {

            $slider = $( "#slider" )
           $slider.slider( "value", i ).trigger('change');
                currentPosition = i;

            currentPosition = i;
            marketsThisDay = data[i];
        }


    group.selectAll(".boroughs")

        .data(boroughs)
        .enter()
        .append("text")
        .attr("x", function(d) { return projection([d.lon, d.lat])[0]; } )
        .attr("y", function(d) { return projection([d.lon, d.lat])[1]; } )
        .attr("class", "boroughs")
        .text( function(d){return d.name;} );

    });


});







// thank you function!
function thankyou() {
    console.log("Thanks to those who were generous with their time and guidance, especially Larry Buchanan, TC McCarthy, and of course, our WDI instructors.");
}
