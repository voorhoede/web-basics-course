mapboxgl.accessToken = "";

const mapElement = document.getElementById("map");

/**
 * get the location button element from the DOM and store it in a variable
 */

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

/**
 * create a function that handles the click event on the location button
 * remember: we're dealing with asynchronous code here
 */

/**
 * add a click event listener to the location button
 */
