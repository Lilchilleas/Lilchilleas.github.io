
let map = L.map('container-Map').setView([59.909734, 10.744141], 14);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=r19sKk6TB2e08Li0yrS6', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
 
 
let latlngs1 = [
    [59.90605037361362, 10.743468352993146], 
    [59.905285558317615,10.7359051597224],
    [59.90711462980319,10.734403363882072],
    [59.909911838374,10.734531145082734],
    [59.913667079009215, 10.737313500513107],
    [59.9114045, 10.7485914]
];

 


let latlngs2 = [
    [59.91297292021837, 10.741444371595785],
    [59.914556297482406, 10.744133100598548], 
    [59.91533075906097, 10.751090895388186],
    [59.91391089903027, 10.752722970709236],
    [59.91203200109666,10.753799677608635],
    [59.9114045, 10.7485914]
];

let latlngs3 = [
    [59.90968793580208, 10.747133034946483],
    [59.9113942856444, 10.748625991949506], 
    [59.91202001123271,10.753788740488865],
    [59.91138207143761, 10.757709998386574],
    [59.90777585003563,10.755116044448647]
];

let latlngs4 = [
    [59.909648825538916, 10.747068623740635],
    [59.90775175508355,10.755110966982],
    [59.90465432638757,10.753596205535723],
    [59.90560117043964,10.74659538772382],
    [59.90338308250754,10.745013005664397],
    [59.90265138378393,10.739593384216775],
    [59.90534428736879,10.736989824452952],
    [59.9059432285455,10.743539573076697],
    [59.909554579884585,10.74707517024625]
];

let latlngs5 = [
    [59.91140381062152,10.757724300490914],
    [59.91202628637481,10.753852915370075],
    [59.91394944412182,10.752926218918578],
    [59.91394944412182,10.760141785743095]
];

let latlngs6 = [
    [59.9033465429251,10.744962995790353],
    [59.90164997944779,10.743674506889619],
    [59.901567480614055,10.741899556210825],
    [59.90168226158716,10.740941411724434],
    [59.90266147156957,10.739567018043571]
];

   
 
createPolygon(latlngs1,"green",'<iframe src="https://www.google.com/maps/embed?pb=!4v1649132875399!6m8!1m7!1sX7BzEJqI87XrHWvUGViHfg!2m2!1d59.91431379480287!2d10.75375944091026!3f298.1062810286905!4f0!5f0.7820865974627469" width="400" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',195,80,"orange","Sterk","CSV/data.csv");
createPolygon(latlngs2,"orange",'<iframe src="https://www.google.com/maps/embed?pb=!4v1649157044379!6m8!1m7!1sRZ4T7wllAUmd-gyeiD7F5Q!2m2!1d59.91300758648096!2d10.74841888500045!3f286.46066!4f0!5f0.7820865974627469" width="400" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',155,120,"green","Middels","CSV/data2.csv");
createPolygon(latlngs3,"red",'<iframe src="https://www.google.com/maps/embed?pb=!4v1649157161455!6m8!1m7!1scCLcLWQgfOBMRH_0j0IUHQ!2m2!1d59.90937340146624!2d10.75190278320806!3f49.866768562635116!4f0!5f0.7820865974627469" width="400" height="200"style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',85,20,"red","Svak","CSV/data3.csv");
createPolygon(latlngs4,"orange",'<iframe src="https://www.google.com/maps/embed?pb=!4v1649157344902!6m8!1m7!1sglLD_CB3FLmoTQhYWdoiNg!2m2!1d59.90804005726429!2d10.74849788088421!3f93.27639240291029!4f0!5f0.7820865974627469" width="400" height="200"style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',165,130,"green","Middels","CSV/data4.csv");
createPolygon(latlngs5,"green",'<iframe src="https://www.google.com/maps/embed?pb=!4v1649157424195!6m8!1m7!1sCt-tatXAAm-65yivN43eUA!2m2!1d59.91353205456765!2d10.75503745660575!3f80.68714638331554!4f0!5f0.7820865974627469" width="400" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',205,144,"green","Sterk","CSV/data5.csv");
createPolygon(latlngs6,"red",'<iframe src="https://www.google.com/maps/embed?pb=!4v1649157481219!6m8!1m7!1sTRCieulGmC61eMeD2uLx3A!2m2!1d59.90375970081001!2d10.74024078385283!3f96.11791518796896!4f3.578005464439059!5f0.7820865974627469" width="400" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',75,40,"orange","Svak","CSV/data6.csv");

  
function createPolygon(cordinates,colorA,map360A,lengthdBm,lengthMbps,colorMbps,dBmStatus,csv){

    let latlngs = cordinates;

    let polygon = L.polygon(latlngs,{
        color : colorA,
        opacity: 0.2
    });

    

    polygon.addTo(map);
    let map360 = map360A;
    createPopUp(polygon,map360,colorA,dBmStatus,lengthdBm,lengthMbps,colorMbps,csv);
}
 
 
 
 
      setTimeout("popUpInfo()",1200); // after 15 sec
 
 



