mapboxgl.accessToken = "";

const mapElement = document.getElementById("map");
const locationButtonElement = document.querySelector(".location-button");
const mapConfig = {
  container: mapElement,
  style: "mapbox://styles/mapbox/dark-v11",
  center: [5.5, 52.1],
  zoom: 6,
};

const map = new mapboxgl.Map(mapConfig);

/**
 * Fetches weather data for given coordinates.
 */
async function fetchWeatherForLocation(coordinates) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates[1]}&longitude=${coordinates[0]}&hourly=temperature_2m&current_weather=true`;
  const response = await fetch(url);

  return response.json();
}

/**
 * Zooms the map to the current location of the user.
 */
function zoomToCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const coordinates = [position.coords.longitude, position.coords.latitude];

      map.flyTo({ center: coordinates, zoom: 12 });

      resolve();
    }, reject);
  })
}

/**
 * Handles a click on the current location button.
 */
async function handleCurrentLocationClick() {
  locationButtonElement.textContent = "Loading...";

  try {
    await zoomToCurrentLocation();
  } catch (error) {
    alert("Unable to get current location. Please try again later.");
  }

  locationButtonElement.textContent = "Current location";
}

/**
 * Handles a click on the map. Fetches weather data for the clicked location and
 * displays it in a popup.
 */
async function handleMapClick(e) {
  const coordinates = e.lngLat.toArray();
  const popup = new mapboxgl.Popup()
    .setLngLat(coordinates)
    .setHTML("Loading weather...")
    .addTo(map);

  try {
    const weatherResponse = await fetchWeatherForLocation(coordinates);
    const currentWeather = weatherResponse?.current_weather;

    popup.setHTML(`
            <p>Temperature: ${currentWeather?.temperature}°C</p>
            <p>Wind speed: ${currentWeather?.windspeed} m/s</p>
            <p>Wind direction: ${currentWeather?.winddirection}°</p>
        `);
  } catch (error) {
    popup.setHTML("Error loading weather data. Please try again later.")
  }
}

map.on("click", handleMapClick);

locationButtonElement.addEventListener("click", handleCurrentLocationClick);
