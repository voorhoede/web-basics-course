mapboxgl.accessToken = "";

const mapElement = document.getElementById("map");
const locationButtonElement = document.getElementById("location-button");

const mapConfig = {
  container: mapElement,
  style: "mapbox://styles/mapbox/dark-v11",
  center: [5.5, 52.1],
  zoom: 6,
};

const map = new mapboxgl.Map(mapConfig);

function zoomToCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const coordinates = [position.coords.longitude, position.coords.latitude];

      map.flyTo({ center: coordinates, zoom: 12 });

      resolve();
    }, reject);
  })
}

async function handleCurrentLocationClick() {
  locationButtonElement.textContent = "Loading...";

  try {
    await zoomToCurrentLocation();
  } catch (error) {
    alert("Unable to get current location. Please try again later.");
  }

  locationButtonElement.textContent = "Current location";
}

locationButtonElement.addEventListener("click", handleCurrentLocationClick);
