$(function () {
	
	console.log("leaflet eg");
	var map = L.map('map').setView([51.505, -0.09], 13);
	
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map); 

	var marker = L.marker([51.5, -0.09]).addTo(map);
	
	var circle = L.circle([51.508, -0.11], 500, {
	    color: 'red',
	    fillColor: '#f03',
	    fillOpacity: 0.5
	}).addTo(map);

	marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
	circle.bindPopup("I am a circle.");

});
