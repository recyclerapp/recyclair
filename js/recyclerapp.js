
var mapOptions = {
  center: [35.3180305,25.1018764],
  zoom:15
}
var map = new L.map('map',mapOptions);
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,Bin data provided by the community <3',maxZoom:20});
map.addLayer(layer);
var garbageBinInfo = {
    title: "Garbage Bin",
    icon:L.icon({iconUrl:'http://ermescloud.net/garbage-bin.png',iconSize:[35,40]})
}
var recyclingBinInfo = {
    title: "Recycling Bin",
    icon:L.icon({iconUrl:'http://ermescloud.net/recycling-bin.png',iconSize:[35,40]})
}
var bothInfo = {
    title: "Recycling and Garbage Bin",
    icon:L.icon({iconUrl:'http://ermescloud.net/both.png',iconSize:[35,40]})
}
var marker = L.marker([35.316201,25.101393],bothInfo);
marker.bindPopup("Recycling and Garbage Bin");
marker.addTo(map);
var marker = L.marker([35.317013,25.101373],garbageBinInfo);
marker.bindPopup("Garbage Bin");
marker.addTo(map);
var marker = L.marker([35.318307 ,25.101186],garbageBinInfo);
marker.bindPopup("Garbage Bin");
marker.addTo(map);