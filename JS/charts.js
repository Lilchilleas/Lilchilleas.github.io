function dBmChart(color,length){
  
    let margin = {top: 20, right: 30, bottom: 40, left: 90};
    let width = 370 - margin.left - margin.right;
    let height = 100 - margin.top - margin.bottom;
     
    //SVG
    let svg = d3.select("#dBmChart")
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
           
    // X axis
    let x = d3.scaleLinear()
        .domain([-100, 0])
        .range([ -55, width]);
  
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(0,0)rotate(-45)")
            .style("text-anchor", "end");
  
    // Y axis
    let y = d3.scaleBand()
        .range([0, height ])
        //.domain("dbm") Spør Lærer hvorfor det skjer og om han kan se på det.

        svg.append("g")
            .attr("transform", "translate(-50,0)")
            .call(d3.axisLeft(y))
            .append("rect")
            .attr("x", 5 )
            .attr("y", 0)
            .attr("width",0)
            .attr("height", y.bandwidth()-5 )
            .attr("fill", color)
            .transition()
                   
        .duration(2000)
        .attr('width',length)  
}
    
 


function MbpsChart(color,length){

    let margin = {top: 20, right: 30, bottom: 40, left: 90};
    let width = 370 - margin.left - margin.right;
    let height = 100 - margin.top - margin.bottom;
     
    //SVG
    let svg = d3.select("#MbpsChart")
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
           
    // X axis
    let x = d3.scaleLinear()
        .domain([0, 70])
        .range([ -55, width]);
  
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(0,0)rotate(-45)")
            .style("text-anchor", "end");
  
    // Y axis
    let y = d3.scaleBand()
        .range([0, height ])
        //.domain("Mbps") Spør Lærer hvorfor det skjer og om han kan se på det.

        svg.append("g")
            .attr("transform", "translate(-50,0)")
            .call(d3.axisLeft(y))
            .append("rect")
            .attr("x", 5 )
            .attr("y", 0)
            .attr("width",0)
            .attr("height", y.bandwidth()-5 )
            .attr("fill", color)
            .transition()
        
         // Animation          
        .duration(2000)
        .attr('width',length)  

}



function MinAvgMax(csv){
    
    let margin = {top: 20, right: 30, bottom: 40, left: 90};
    let width = 370 - margin.left - margin.right;
    let height = 250 - margin.top - margin.bottom;
    let myColor = ["red","#F1C40F","green"];
     
    //SVG
    let svg = d3.select("#MAM-Chart")
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


 

    d3.csv(csv, function(data) {


        // X axis
        let x = d3.scaleBand()
            .range([ 0, width ])
            .domain(data.map(function(d) { return d.Type; }))
            .padding(0.2);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");


        // Y axis
        let y = d3.scaleLinear()
            .domain([0, 100])
            .range([ height, 0]);
        svg.append("g")
            .call(d3.axisLeft(y));


        // Y axis label:
        svg.append("text")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(-90)")
            .attr("y", -margin.left+20)
            .attr("x", -margin.top+35)
         .text("Mbps")

        // Bars
        svg.selectAll("mybar")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", function(d) { return x(d.Type); })
            .attr("y", function(d) { return y(d.Value); })
            .attr("width", x.bandwidth())
            .attr("height", function(d) { return height - y(d.Value); })
            .attr("fill", function(d,i) { return myColor[i] })
         
            .attr("height", function(d) { return height - y(0); })  
            .attr("y", function(d) { return y(0); })

        // Animation
        svg.selectAll("rect")
            .transition()
            .duration(1600)
            .attr("y", function(d) { return y(d.Value); })
            .attr("height", function(d) { return height - y(d.Value); })
            .delay(function(d,i){console.log(i) ; return(i*100)})


    })

}






 
   