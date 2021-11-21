function setup() { 
  noCanvas();
  var map = L.map('mapid').setView([42.7339, 25.4858],8);

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);


   L.marker([42.5048, 27.4626]).addTo(map)
     .bindPopup('Бургас<br> <a href="https://www.youtube.com/watch?v=IsmtonSBo-8">Video</a>')
     .openPopup();

   L.marker([42.1354, 24.7453]).addTo(map)
      .bindPopup('Пловдив<br> <a href="https://youtu.be/V22_J-1fd2s">video</a>')
      .openPopup();
  
   L.marker([42.6977, 23.3219]).addTo(map)
      .bindPopup('София<br> <a href="https://www.youtube.com/watch?v=aLJAmYC89JU">Video</a>')
      .openPopup();

   L.marker([42.4443, 27.6383]).addTo(map)
      .bindPopup('Черноморец<br> <a href="https://www.youtube.com/watch?v=0i7bxi92XVA">Video</a>')
      .openPopup();
  
   L.marker([43.2141, 27.9147]).addTo(map)
      .bindPopup('Варна<br> <a href="https://youtu.be/h-RrAGw-rEA>Video</a>')
      .openPopup();
  
   L.marker([42.6883, 27.7139]).addTo(map)
      .bindPopup('Слънчев бряг<br> <a href="https://www.youtube.com/watch?v=oInV7TTxnYk">Video</a>')
      .openPopup();
  
   L.marker([42.4842, 26.5035]).addTo(map)
      .bindPopup('Ямбол<br> <a href="https://www.youtube.com/watch?v=Zw1jvdc42tE">Video</a>')
      .openPopup();
   
   

} 

function draw() { 

}