// Initialize and add the map

function initMap() {
  // The location of Uluru
  const new_york = { lat: 43.0, lng: -75.0 };
  // The map, centered at New York
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: new_york,
  });

  // The marker, positioned at brooklyn
  function addMarker(location){
  const marker = new google.maps.Marker({
    position: location,
    map: map,
    icon: "marker.png",
  });
}

  // Locations
  addMarker({lat: 40.6782, lng: -73.9442});
  addMarker({lat: 42.8864, lng: -78.8784});
  addMarker({lat: 40.9312, lng: -73.8987}); //yonker
  addMarker({lat: 41.8781, lng: -87.6298}); //Chicago
  addMarker({lat: 41.0762, lng: -73.8587}); //Tarrytown
  addMarker({lat: 41.2033, lng: -77.1945}); //Pennsylvania
  addMarker({lat: 45.4215, lng: -75.6972}); //ottawa
  addMarker({lat: 46.8131, lng: -71.2075}); //Quebec
  addMarker({lat: 44.5588, lng: -72.5778}); //vermont










  //infloWindow

  const detailWindow = new google.maps.InfoWindow({
    content: `<h2>Brooklyn NY</h2>`,
  });

  marker.addListener("mouseover", () => {
    detailWindow.open(map, marker);
  });
}

window.initMap = initMap;
