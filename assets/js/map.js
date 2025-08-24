mapboxgl.accessToken = "pk.eyJ1IjoiYWVzb20iLCJhIjoiY21lZzEzdHM4MHVzdjJqc2Y4cGtrMzJseSJ9.7j6FIpAePZGj6gOidJ35Hw"

const map_section = document.getElementById("map")

const map = new mapboxgl.Map({
	container: "map",
	style: "mapbox://styles/mapbox/standard-satellite",
	projection: "globe",
	zoom: 2,
	center: [30, 15],
	scrollZoom: true,
	boxZoom: true,
});

map.addControl(new mapboxgl.NavigationControl());

  map.on('style.load', () => {
        map.setFog({});})