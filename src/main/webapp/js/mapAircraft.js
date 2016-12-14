$(document).ready(function(){
	var markerList = {};
	var contentList = {};
	var boundary;
	
	//Create Airplane SVG Image
	var airplaneSvg = {
		path: 'm497.25,357l0,-51l-204,-127.5l0,-140.25c0,-20.4 -17.85,-38.25 -38.25,-38.25c-20.4,0 -38.25,17.85 -38.25,38.25l0,140.25l-204,127.5l0,51l204,-63.75l0,140.25l-51,38.25l0,38.25l89.25,-25.5l89.25,25.5l0,-38.25l-51,-38.25l0,-140.25l204,63.75z',
		fillColor: 'black',
		fillOpacity: 0.8,
		strokeColor: 'black',
		scale: 0.0433,
		strokeWeight: .5,
		rotation: 0,
		anchor: new google.maps.Point(400, 400)
	}
	
	//var myLatlng = new google.maps.LatLng(34.603805, -118.084983);
	var latlng = new google.maps.LatLng(37.09024, -95.712891);
	
	//Set map options and create map
	var myOptions = {
		zoom: 5,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	}
	var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	
	$('input[type=radio][name=artcc]').change(function() {
		//setBoundary(this.value);
		//getMarkers(this.value);
	});
	
	function clearMarkers() {
		for (var key in markerList) {
			markerList[key].setMap(null);
		}
		
		for (var key in contentList) {
			contentList[key].setMap(null);
		}
		markerList = {};
		contentList = {};
	}
	
	function setBoundary(artcc) {
		var url = "http://localhost:8080/AviationRest/points/" + artcc;
		$.getJSON( url, function(result) {
			var coords = [];
			$.each(result, function(i, field){
				coords.push(new google.maps.LatLng(field.lat,field.lon));
			});
			
			if(boundary != null) {
				boundary.setMap(null);
			}
						
			// Construct the artcc polygon.
			boundary = new google.maps.Polygon({
				paths: coords,
				strokeColor: '#FF0000',
				strokeOpacity: 0.8,
				strokeWeight: 2,
				fillColor: '#FF0000',
				fillOpacity: 0.35
			});
			
			boundary.setMap(map);
		});
	}
	
	function getMarkers(artcc) {
		clearMarkers();
		//Call the service to return aircraft in the area
		var url = "http://localhost:8080/AviationRest/locations/" + artcc;
		$.getJSON(url, function(result){
			//Loop through results
			$.each(result, function(i, field){
			  //Start the plane roation at 0
			  airplaneSvg['rotation'] = 0;
				//Set values for info window
				var infoWindowContent = 'AircrafID: ' + field.aircraftId + 
																'<br>Altitude: ' + field.altitude + 
																'<br>Speed: ' + field.speed +
																'<br>Latitude: ' + field.location.lat +
																'<br>Longitude: ' + field.location.lon;
				
				//Set current position
				var currentPosition = new google.maps.LatLng(field.location.lat,field.location.lon);
				var heading;
				
				//If there is date for the next time the aircraft should report
				if(field.nextEvent) {
					heading = google.maps.geometry.spherical.computeHeading(currentPosition, new google.maps.LatLng(field['nextEvent']['@latitudeDecimal'],field['nextEvent']['@longitudeDecimal']));
					infoWindowContent = infoWindowContent + "<br>Heading: " + heading;
				}
				
				//Do we have this marker already?
				if(markerList.hasOwnProperty(field.aircraftId)) {
				  //Update the position, the rotation, and the info window
					markerList[field.aircraftId].setPosition(currentPosition);
					if(heading) {
					  airplaneSvg['rotation'] = heading;
						markerList[field.aircraftId].setIcon(airplaneSvg);
					}
					contentList[field.aircraftId].setContent(infoWindowContent);
				}
				else {
					var marker; 
					
					//If we have a heading
					if(heading) {
					  //Rotate the airplane SVG
						airplaneSvg['rotation'] = heading;
						
						//Create the new marker for the current position and airplan svg
						marker = new google.maps.Marker({
							position: currentPosition,
							title:field.aircraftId,
							icon:airplaneSvg,
							map:map
						});		
					}
					else {
						//Create the new marker for the current position and airplan svg
						marker = new google.maps.Marker({
							position: currentPosition,
							title:field.aircraftId,
							icon:airplaneSvg,
							map:map
						});		
					}
					
					// Initialise the infoWindow
					var infoWindow = new google.maps.InfoWindow({
							content: infoWindowContent
					});
					
					// Display our info window when the marker is clicked
					google.maps.event.addListener(marker, 'click', function() {
							infoWindow.open(map, marker);
					});
					
					markerList[field.aircraftId] = marker;
					contentList[field.aircraftId] = infoWindow;
				}
			});
		});
	}
	//var refreshId = setInterval(getMarkers, 10000);
});