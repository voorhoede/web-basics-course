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

async function fetchWeatherForLocation(coordinates) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates[1]}&longitude=${coordinates[0]}&hourly=temperature_2m&current_weather=true`;
  const response = await fetch(url);

  return response.json();
}

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

async function handleMapClick(e) {
  const coordinates = e.lngLat.toArray();
  const popup = new mapboxgl.Popup()
    .setLngLat(coordinates)
    .setHTML("Loading weather...")
    .addTo(map);

  /**
   * 2. fetch weather data for the coordinates (use the fetchWeatherForLocation function)
   */

  /**
   * 3. display the weather data in the popup
   * hint: https://docs.mapbox.com/mapbox-gl-js/api/markers/#popup#sethtml
   */

  /**
   * 4. bonus: add error handling for when data fetching fails (using try/catch)
   */
}

/**
 * 1. Add an click listener on the map
 * hint: https://docs.mapbox.com/mapbox-gl-js/example/popup-on-click/
 */

locationButtonElement.addEventListener("click", handleCurrentLocationClick);