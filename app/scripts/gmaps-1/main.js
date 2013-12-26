function initialize() {
  
    var mapOptions = {
        zoom: 2,
        center: new google.maps.LatLng(0.0,0.0)
    }
    
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    $.ajax({
        type: 'GET',
        url: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojsonp',
        async: false,
        dataType: 'jsonp',
        jsonpCallback: 'eqfeed_callback',
        contentType: "application/json",
        success: function(data) {
            console.dir(data.type);
            _.each(data.features, function(feature) { 
                console.log( feature.properties.place + ' | ' 
                            + feature.properties.mag + ' | ' + feature.properties.time + ' | '
                            + feature.geometry.coordinates[0] + ' | ' + feature.geometry.coordinates[1] );
            
                var myLatlng = new google.maps.LatLng(feature.geometry.coordinates[1],feature.geometry.coordinates[0]);
                var marker = new google.maps.Marker({
                  position: myLatlng,
                  map: map,
                  title: ( feature.properties.place + ' | ' + feature.properties.mag + 'M | time:' + new Date(feature.properties.time)  )
                });
            
            }); 
            
        },
        error: function(e) {
            console.log(e.message);
        }
    });
    
}

google.maps.event.addDomListener(window, 'load', initialize);

console.log(new Date());
console.log(new Date().getTime());
