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
            group.selectAll("circle")
                .data(data)
                .enter()
                .append("circle")
                .attr("cx", function(d) {
                debugger;
                        return projection([d.longitude, d.latitude])[0];
                })
                .attr("cy", function(d) {
                        return projection([d.longitude, d.latitude])[1];
                })
                .attr("r", 10)
                .attr("opacity", ".7")
                .style("fill", "#2c344a");

    })


});