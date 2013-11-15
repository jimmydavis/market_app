var width = 650,
    height = 800;

var svg = d3.select("#map-canvas").append("svg")
    .attr("width", width)
    .attr("height", height);

d3.json("boroughs.json", function(error, data) {
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
            // debugger;


                    // creates the slider
                    $( "#slider" ).slider({
                        value: 1, //TODO this will be current date
                        min: 1,
                        max: 365,
                        step: 1,
                        slide: function( event, ui ){

                        var mkt = group.selectAll(".circle")
                            .data(allMarkets[ui.value]);

                        mkt.enter()
                            .append("circle")
                            .attr("class", "circle")
                            .attr("cx", function(d) {
                                    return projection([d.longitude, d.latitude])[0];
                            })
                            .attr("cy", function(d) {
                                    return projection([d.longitude, d.latitude])[1];
                            })
                            .attr("r", 12)
                            .attr("opacity", "0.6")
                            .style("fill", "#ffffff");

                        mkt.exit().remove();

                        }
                      });
                    // Creates the slide function that will update what circle elements are displayed on the map
                    function setSlide(i) {

                        $("#slider").slider("value", i);
                        currentPosition = i;
                        marketsThisDay = data[i];
                    }


                    // THIS CODE SELECTS THE CIRCLES BASED ON THE DATA_OPEN VALUE
                    // group.selectAll(".circle")[0]
                    // foo[0].__data__.date_open



            // click event listener for each market's
            d3.selectAll(".circle")
                .on("click", function(d) {
                    d3.selectAll(".circle").style("fill", "#1abc9c");
                    d3.select(this)
                        .style("fill", null);
                        $(".market").fadeOut(500, function() {
                            d3.select(".market")
                                .html(d.market_name + "<br>" + d.neighborhood + "<br>" + d.operation_hours + "<br>" + d.operation_season + "<br>" + "<a href=" + "/markets/" + d.markets_id + ">More info ...</a>");
                                $(".market").fadeIn(500);
                        });

        });
    });



});

        // function to pull markets that are open by week
        // d3.json("fake_data.json", function(error, data) {
        //         // group.selectAll("circle")
        //         console.log(data)
                // .data(data)
                // .enter()
                // .append("circle")
                // .attr("cx", function(d) {
                //         return projection([d.longitude, d.latitude])[0];
                // })
                // .attr("cy", function(d) {
                //         return projection([d.longitude, d.latitude])[1];
                // })
                // .attr("r", 10)
                // .attr("opacity", ".5")
                // .style("fill", "#2c344a");


