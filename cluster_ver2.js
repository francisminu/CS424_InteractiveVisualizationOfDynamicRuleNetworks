
		/*var textSize="30px";
        var divWidth= "300px";
        var divHeight="40px";*/
        //var bgColor = "#5ab4ac";
		var textSize="20px";
        var divWidth= "200px";
        var divHeight="20px";
		var bgColor = "black";
        var gap="100";
        //var borderRadius="25px";
        var topMargin = "30px";
		d3.select('body').append('div')
                         .attr('id', 'btn')
                        .style('position', 'absolute')
                         .style('opacity', 1)
                         .style('background-color', bgColor).text('Complete Data')
						 .style("text-align","center")
                         .style('width', divWidth)
						 .style('height',divHeight)
                         .style("left", "20px")
                         .style("top", topMargin)
                         .style('line-height', 1)
                          .style("text-anchor", "middle").style('font-weight', 'bold')
                         .style("font-family", "sans-serif")
                         .style("font-size", textSize)
                         .style("fill", "black")
                         .style('font-weight', 'bold')
                         .style('padding', '3px')
						 .style('color', 'white')
                         .on("click", function () {
						 d3.select("#textDesc").remove();
                             flag_reset("both");
                         })
						 .on("mouseover", function(d){
							d3.select(this).style("cursor","pointer");
							var currentLeft = d3.select(this).style("left").split("p")[0];
							var currentTop = d3.select(this).style("top").split("p")[0];
							var displayeText = "Displays the Matrix Form of the entire data";
							createDescText(currentLeft,currentTop,displayeText);
						 })
						 .on("mouseout", function(d){
							d3.select(this).style("cursor","default");
							d3.select("#textDesc").remove();
						 });
						 
		d3.select('body').append('div')
                         .attr('id', 'btn')
                         .style('position', 'absolute')
                         .style('opacity', 1)
                         .style('background-color', bgColor).text('Positive Influence')
						 .style("text-align","center")
                         .style('width', divWidth)
						 .style('height',divHeight)
                         .style("left", "300px")
                         .style("top",topMargin)
                         .style('line-height', 1)
                          .style("text-anchor", "middle").style('font-weight', 'bold')
                         .style("font-family", "sans-serif")
                         .style("font-size", textSize)
                         .style("fill", "black")
                         .style('font-weight', 'bold')
                         .style('padding', '3px')
                         //.style('color', '#000')
						 .style('color', 'white')
                        // .style('border-radius', borderRadius)
                         .on("click", function () {
						 d3.select("#textDesc").remove();
                             flag_reset("green");
                         })
						 .on("mouseover", function(d){
							d3.select(this).style("cursor","pointer");
							var currentLeft = d3.select(this).style("left").split("p")[0];
							var currentTop = d3.select(this).style("top").split("p")[0];
							var displayeText = "View only Positive Influences between Rules";
							createDescText(currentLeft,currentTop,displayeText);
						 })
						 .on("mouseout", function(d){
							d3.select(this).style("cursor","default");
							d3.select("#textDesc").remove();
						 });
						 
		d3.select('body').append('div')
                         .attr('id', 'btn')
                         .style('position', 'absolute')
                         .style('opacity', 1)
                         .style('background-color', bgColor).text('Negative Influence')
						 .style("text-align","center")
                         .style('width', divWidth)
						 .style('height',divHeight)
                         .style("left", "600px")
                         .style("top",topMargin)
                         .style('line-height', 1)
                          .style("text-anchor", "middle").style('font-weight', 'bold')
                         .style("font-family", "sans-serif")
                         .style("font-size", textSize)
                         .style("fill", "black")
                         .style('font-weight', 'bold')
                         .style('padding', '3px')
                         //.style('color', '#000')
						 .style('color', 'white')
                         //.style('border-radius', borderRadius)
                         .on("click", function () {
						 d3.select("#textDesc").remove();
                             flag_reset("red");
                         })
						 .on("mouseover", function(d){
							d3.select(this).style("cursor","pointer");
							var currentLeft = d3.select(this).style("left").split("p")[0];
							var currentTop = d3.select(this).style("top").split("p")[0];
							var displayeText = "View only Negative Influences between Rules";
							createDescText(currentLeft,currentTop,displayeText);
						 })
						 .on("mouseout", function(d){
							d3.select(this).style("cursor","default");
							d3.select("#textDesc").remove();
						 });
		  d3.select('body').append('div')
                         .attr('id', 'btn')
                         .style('position', 'absolute')
                         .style('opacity', 1)
                         .style('background-color', bgColor).text('Interaction Clustering')
                         .style("text-align","center")
                         .style('width', divWidth+100)
                         .style('height',divHeight)
                         .style("left", "900px")
                         .style("top", topMargin)
                         .style('line-height', 1)
                         .style("text-anchor", "middle").style('font-weight', 'bold')
                         .style("font-family", "sans-serif")
                         .style("font-size", textSize)
                         .style("fill", "black")
                         .style('font-weight', 'bold')
                         .style('padding', '3px')
                         //.style('color', '#000')
                         .style('color', 'white')
                         //.style('border-radius', borderRadius)
                         .on("click", function () {
						 d3.select("#textDesc").remove();
                             
                             order_reset("sort");
                         })
                         .on("mouseover", function(d){
                            d3.select(this).style("cursor","pointer");
							var currentLeft = d3.select(this).style("left").split("p")[0];
							var currentTop = d3.select(this).style("top").split("p")[0];
							var displayeText = "Rules which are influenced by same set of Rules are Clustered together";
							createDescText(currentLeft,currentTop,displayeText);
                         })
                         .on("mouseout", function(d){
                            d3.select(this).style("cursor","default");
							d3.select("#textDesc").remove();
                         });
        d3.select('body').append('div')
                         .attr('id', 'btn')
                         .style('position', 'absolute')
                         .style('opacity', 1)
                         .style('background-color', bgColor).text('Sort by influence')
                         .style("text-align","center")
                         .style('width',divWidth)
                         .style('height',divHeight)
                         .style("left", "1200px")
                         .style("top",topMargin)
                         .style('line-height', 1)
                         .style("text-anchor", "middle").style('font-weight', 'bold')
                         .style("font-family", "sans-serif")
                         .style("font-size", textSize)
                         .style("fill", "black")
                         .style('font-weight', 'bold')
                         .style('padding', '3px')
                         //.style('color', '#000')
                         .style('color', 'white')
                        // .style('border-radius', borderRadius)
                         .on("click", function () {
                             
							 d3.select("#textDesc").remove();
                             order_reset("magnitude");
                         })
                         .on("mouseover", function(d){
                            d3.select(this).style("cursor","pointer");
							var currentLeft = d3.select(this).style("left").split("p")[0];
							var currentTop = d3.select(this).style("top").split("p")[0];
							var displayeText = "Rules are sorted(desc) based on influence level";
							createDescText(currentLeft,currentTop,displayeText);
                         })
                         .on("mouseout", function(d){
                            d3.select(this).style("cursor","default");
							d3.select("#textDesc").remove();
                         });
			
						 
		d3.select('body').append('div')
                         .attr('id', 'btn')
                         .style('position', 'absolute')
                         .style('opacity', 1)
                         .style('background-color', bgColor).text('Original Order')
                         .style("text-align","center")
                         .style('width',divWidth)
                         .style('height',divHeight)
                         .style("left", "1500px")
                         .style("top",topMargin)
                         .style('line-height', 1)
                         .style("text-anchor", "middle")
						 .style('font-weight', 'bold')
                         .style("font-family", "sans-serif")
                         .style("font-size", textSize)
                         .style("fill", "black")
                         .style('font-weight', 'bold')
                         .style('padding', '3px')
                         .style('color', 'white')
                         .on("click", function () {
                             
							 d3.select("#textDesc").remove();
                                 order_reset("original");
                            
                         })
                         .on("mouseover", function(d){
                            d3.select(this).style("cursor","pointer");
							var currentLeft = d3.select(this).style("left").split("p")[0];
							var currentTop = d3.select(this).style("top").split("p")[0];
							var displayeText = "Displays the Original Matrix of the underlying data";
							createDescText(currentLeft,currentTop,displayeText);
                         })
                         .on("mouseout", function(d){
                            d3.select(this).style("cursor","default");
							d3.select("#textDesc").remove();
                         });

                    d3.select('body').append('div')
                         .attr('id', 'btn')
                         .style('position', 'absolute')
                         .style('opacity', 1)
                         .style('background-color', bgColor).text('Compare Data based on Time Intervals')
                         .style("text-align","center")
                         .style('width',"400px")
                         .style('height',divHeight)
                         .style("left", "1800px")
                         .style("top",topMargin)
                         .style('line-height', 1)
                         .style("text-anchor", "middle")
                         .style('font-weight', 'bold')
                         .style("font-family", "sans-serif")
                         .style("font-size", textSize)
                         .style("fill", "black")
                         .style('font-weight', 'bold')
                         .style('padding', '3px')
                         .style('color', 'white')
                         .on("click", function () {
                            d3.select("#textDesc").remove();
                             window.location = "\Timeline.html";
                         })
                         .on("mouseover", function(d){
                            d3.select(this).style("cursor","pointer");
							var currentLeft = d3.select(this).style("left").split("p")[0];
							var currentTop = d3.select(this).style("top").split("p")[0];
							var displayeText = "Allows the user to view and compare the influences at all time intervals at one place";
							createDescText(currentLeft,currentTop,displayeText);
                         })
                         .on("mouseout", function(d){
                            d3.select(this).style("cursor","default");
							d3.select("#textDesc").remove();
                         });
                         //rules are sorted(desc) based on influence level 
                  d3.select('body').append('div')
                         .attr('id', 'btn')
                         .style('position', 'absolute')
                         .style('opacity', 1)
                         .style('background-color', bgColor).text('Start Animation')
                         .style("text-align","center")
                         .style('width',"150px")
                         .style('height',divHeight)
                         .style("left", "2280px")
                         .style("top",topMargin)
                         .style('line-height', 1)
                         .style("text-anchor", "middle")
                         .style('font-weight', 'bold')
                         .style("font-family", "sans-serif")
                         .style("font-size", textSize)
                         .style("fill", "black")
                         .style('font-weight', 'bold')
                         .style('padding', '3px')
                         .style('color', 'white')
                         .on("click", function () {
                          startAnimation(true);
                         })
                         .on("mouseover", function(d){
                            d3.select(this).style("cursor","pointer");
                            var currentLeft = d3.select(this).style("left").split("p")[0];
                            var currentTop = d3.select(this).style("top").split("p")[0];
                            var displayeText = "View all the influences automatically";
                            createDescText(currentLeft,currentTop,displayeText);
                         })
                         .on("mouseout", function(d){
                            d3.select(this).style("cursor","default");
                            d3.select("#textDesc").remove();
                         });
                         d3.select('body').append('div')
                         .attr('id', 'btn')
                         .style('position', 'absolute')
                         .style('opacity', 1)
                         .style('background-color', bgColor).text('Stop Animation')
                         .style("text-align","center")
                         .style('width',"150px")
                         .style('height',divHeight)
                         .style("left", "2500px")
                         .style("top",topMargin)
                         .style('line-height', 1)
                         .style("text-anchor", "middle")
                         .style('font-weight', 'bold')
                         .style("font-family", "sans-serif")
                         .style("font-size", textSize)
                         .style("fill", "black")
                         .style('font-weight', 'bold')
                         .style('padding', '3px')
                         .style('color', 'white')
                         .on("click", function () {
                            stopAnimation();
                          //  d3.select("#textDesc").remove();
                            // window.location = "\Timeline.html";
                         })
                         .on("mouseover", function(d){
                            d3.select(this).style("cursor","pointer");
                            var currentLeft = d3.select(this).style("left").split("p")[0];
                            var currentTop = d3.select(this).style("top").split("p")[0];
                            var displayeText = "Stop Animation";
                            createDescText(currentLeft,currentTop,displayeText);
                         })
                         .on("mouseout", function(d){
                            d3.select(this).style("cursor","default");
                            d3.select("#textDesc").remove();
                         });


	function createDescText(currentLeft,currentTop,displayText)
	{
		currentTop = parseInt(currentTop) + 40;
		//console.log(currentLeft + " top: " + currentTop);
		d3.select('body').append('div')
							.attr('id', 'textDesc')
							.style('position', 'absolute')
							.style('opacity', 1)
							.style('background-color', "orange").text(displayText)
							.style("text-align","center")
							.style('width',"450px")
							.style('height',"50px")
							.style("left", currentLeft + "px")
							.style("top", currentTop + "px")
							.style('line-height', 1)
							.style("text-anchor", "middle")
							.style('font-weight', 'bold')
							.style("font-family", "sans-serif")
							.style("font-size", textSize)
							.style("fill", "black")
                         .style('font-weight', 'bold')
                         .style('padding', '3px')
                         .style('color', 'black');
	}