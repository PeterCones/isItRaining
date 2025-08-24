mapboxgl.accessToken =
  "pk.eyJ1IjoiYWVzb20iLCJhIjoiY21lZzEzdHM4MHVzdjJqc2Y4cGtrMzJseSJ9.7j6FIpAePZGj6gOidJ35Hw";

const geoLocate = document.getElementById("geolocate");

let currentMarker = null;


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

map.on("style.load", () => {
  map.setFog({});
});

geoLocate.addEventListener("click", () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      map.flyTo({
        center: [position.coords.longitude, position.coords.latitude],
        zoom: 15,
      });
      if (currentMarker) {
			currentMarker.remove();
		}
		currentMarker = new mapboxgl.Marker().setLngLat([position.coords.longitude, position.coords.latitude]).addTo(map);
    });
  }
});
