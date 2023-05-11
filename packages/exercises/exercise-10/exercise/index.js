mapboxgl.accessToken = "pk.eyJ1IjoiaW9taWMiLCJhIjoiY2thZ3g5NDJvMGF4eDJzcWI3NnpraTlybCJ9.2NLC1oDwtP6lBWIsAfEu1A";

const mapElement = document.getElementById("map");

/**
 * 1. Get the location button element from the DOM and store it in a variable
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
 * 2. Create a function that handles the click event on the location button. Inside the function:
 *    - change the textContent of the location button to "Loading..."
 *    - call the zoomToCurrentLocation function
 *    - change the textContent of the location button back to "Current location"
 *    - if an error occurs, alert the user with a message
 *    - change the textContent of the location button back to "Current location"
 * 
 * Remember: we're dealing with asynchronous code here
 */

/**
 * 3. Add a click event listener to the location button that calls the function you created in step 2
 */
