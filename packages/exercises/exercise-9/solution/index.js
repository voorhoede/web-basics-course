mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN

const mapElement = document.getElementById("map");

const mapConfig = {
  container: mapElement,
  style: "mapbox://styles/mapbox/dark-v11",
  center: [5.5, 52.1],
  zoom: 6,
};

const map = new mapboxgl.Map(mapConfig);
