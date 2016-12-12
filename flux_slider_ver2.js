
 d3.select("body").append("svg")
				.attr("id","svg2")
				.attr("width",2000)
				.attr("height",200);
	//console.log("slider");
var svg_slider = d3.select("#svg2"),
   margin = {right: 10, left: 100},
    width = +svg_slider.attr("width") - margin.left - margin.right,
    height = +svg_slider.attr("height");
     d3.select("#svg2")
//.append("rect").attr("x","300").attr("y","40").attr("width","50").attr("height","20").attr("fill","red")
  .append("text")
    .text("Time Intervals") .attr("text-anchor", "middle")
                         .attr("x", 1000)
                         .attr("y", 75 )
                         .style('font-weight', 'bold')
                         .attr("font-family", "sans-serif")
                         .attr("font-size", "20px")
                         .attr("fill", "black");

var x = d3.scaleLinear()
    .domain([0, 35])
    .range([0,width])
    .clamp(true);

var slider = svg_slider.append("g")
    .attr("class", "slider")
    .attr("transform", "translate(" + margin.left + "," + height /10 + ")");

slider.append("line")
    .attr("class", "track")
    .attr("x1", x.range()[0])
    .attr("x2", x.range()[1]).style("fill","black")
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-inset")
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-overlay")
    .call(d3.drag()
        .on("start.interrupt", function() { slider.interrupt(); })
        .on("start drag", function() { hue(x.invert(d3.event.x)); })
        );

slider.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 35 + ")")
  .selectAll("text")
  .data(x.ticks(35))
  .enter().append("text")
    .attr("x", x)
    .attr("text-anchor", "middle").style('font-weight', 'bold')
    .attr("font-family", "sans-serif")
                         .attr("font-size", "15px")
                         .attr("fill", "black")
    .text(function(d) { return d ; });

var handle = slider.insert("circle", ".track-overlay")
    .attr("class", "handle")
    .attr("r", 9);
/*
slider.transition() // Gratuitous intro!
    .duration(750)
    .tween("hue", function() {

      var i = d3.interpolate(0, 0);
      return function(t) { hue(i(t)); };

    });*/
function hue(h) {
  //svg.style("background-color", "#5ab4ac");
  handle.attr("cx", x(h));
  h = Math.round(h);
  console.log("in slider");
  flux_reset("flux_"+h);
}
var f=0;
var animationDuration = 100;
var delay = 100;
var flag= true;
//startAnimation();
function startAnimation()
{
 if  (f<36)
  {
  hue(f);
  setTimeout(function() {}, 1000);
  timeOut = setTimeout(startAnimation, animationDuration + delay);
  f++;
  }
  else
  {
    f=0;
  }


  // await sleep(2000);
}
function stopAnimation()
{
  f = 0;
  clearTimeout(timeOut);
 // d3.selectAll("path").style("stroke-width",2); 
  //d3.selectAll("path").style("opacity",0.6); 
}



