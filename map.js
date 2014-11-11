/* MAPS CODE */
var myLatlng = new google.maps.LatLng(43.60220, 3.88164);

function initialize() {
        var map1Options = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.SATELLITE,
          scrollwheel: false      

        };
          var map2Options = {
          center: myLatlng,
          zoom: 17,
          scrollwheel: false     
        };

        var map1 = new google.maps.Map(document.getElementById('map-canvas-1'),
            map1Options);
        
        var map2 = new google.maps.Map(document.getElementById('map-canvas-2'),
            map2Options);

		 var marker1 = new google.maps.Marker({
		      position: myLatlng,
		      map: map1,
		  });

		 var marker2 = new google.maps.Marker({
		      position: myLatlng,
		      map: map2,
		  });

      }

google.maps.event.addDomListener(window, 'load', initialize);