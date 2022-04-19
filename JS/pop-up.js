function createPopUp(polygon,map360,color,dBmStatus,lengthdBm,lengthMbps,colorMbps,csv) {
  polygon.on('click', function(e){
    let ut= '<div id="popup" class="popup-wrapper hide" style="overflow-y: scroll;>';
      ut+=' <div class="popup-content">';
      ut+=' <div class="popup-title">';
      ut+='<button type="button" class="popup-close">&times;</button><h3>Connection at '+e.latlng+'</h3></div>';
      ut+='<div>'+map360+'<div>';
      ut+='<div><h3>Connection Strength: '+dBmStatus+' (dBm)</h3><div>';
      ut+='<div id="dBmChart"></div>';
      ut+='<div><h3>Internet speed (Mbps)</h3><div>';
      ut+='<div id="MbpsChart"></div>';
      ut+='<div><h3>Min,Avg,Max Today (mBps)</h3><div>';  
      ut+='<div id="MAM-Chart"></div>';
    
      $("#liste").html(ut);
  
      let popup = $('#popup').popup({
        width: 400,
        height: 350
      });
      
      dBmChart(color,lengthdBm);
      MbpsChart(colorMbps,lengthMbps);
      MinAvgMax(csv);

      popup.open();
    
    })
}
 
 

function popUpInfo() {
 console.log("hei");
 let ut= '<div id="popup" class="popup-wrapper hide" style="overflow-y: scroll; >';
 ut+=' <div class="popup-content">';
 ut+=' <div class="popup-title">';
 ut+='<button type="button" class="popup-close">&times;</button><h3>Information</h3></div>';
 
 ut+='<div><img src="Image/pic.PNG" alt="colors" height="600" width="400"></div>';
 

 
 

 $("#liste").html(ut);

 let popup = $('#popup').popup({
   width: 500,
   height: 500
 });
 popup.open();
}
  