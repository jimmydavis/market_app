var width = 650,
    height = 700;

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
            group.selectAll(".circle")
                .data(data)
                .enter()
                .append("circle")
                .attr("class", "circle")
                .attr("cx", function(d) {
                        return projection([d.longitude, d.latitude])[0];
                })
                .attr("cy", function(d) {
                        return projection([d.longitude, d.latitude])[1];
                })
                .attr("r", 12)
                .attr("opacity", ".3")
                .style("fill", "#1abc9c");

                    // creates the slider element on the page, must background-color css to see
                    $( "#slider" ).slider({
                        value: 1, //TODO this will be current date
                        min: 1,
                        max: 365,
                        step: 1,
                        slide: function( event, ui ){
                          setSlide(ui.value);
                        }
                      });

                    // Creates the slide function that will update what circle elements are displayed on the map
                    function setSlide(dayValue) {
                        g.selectAll(".circle")
                            .data(data)
                    }

            // click event listener for each market's
            d3.selectAll(".circle")
                .on("click", function(d) {
                    d3.select(".market").html(d.market_name + "<br>" + d.neighborhood + "<br>" + d.market_link + "<br>" + d.operation_hours + "<br>" + d.operation_season);
        });
    });
        d3.slider().value(50).orientation("vertical");


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


