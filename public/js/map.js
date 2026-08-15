// const locationName = `${listingLocation}, ${listingCountry}`;

// fetch(
//   `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locationName)}`
// )
//   .then(response => response.json())
//   .then(data => {

//     if (data.length === 0) {
//       console.log("Location not found");
//       return;
//     }

//     const latitude = parseFloat(data[0].lat);
//     const longitude = parseFloat(data[0].lon);

//     const map = L.map("map").setView(
//       [latitude, longitude],
//       12
//     );

//     L.tileLayer(
//       "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
//       {
//         attribution: "&copy; OpenStreetMap contributors"
//       }
//     ).addTo(map);

//     L.marker([latitude, longitude])
//       .addTo(map)
//       .bindPopup(
//         `<b>${listingTitle}</b><br>${listingLocation}`
//       )
//       .openPopup();

//   })
//   .catch(error => {
//     console.error("Error loading map:", error);
//   });

console.log("Map JS loaded");

const mapElement = document.getElementById("map");

const listingLocation = mapElement.dataset.location;
const listingCountry = mapElement.dataset.country;
const listingTitle = mapElement.dataset.title;

const locationName = `${listingLocation}, ${listingCountry}`;

console.log("Searching:", locationName);

fetch(
  `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(locationName)}&limit=1`
)
  .then(response => response.json())
  .then(data => {

    console.log("Nominatim result:", data);

    if (data.length === 0) {
      console.log("Location not found");
      return;
    }

    const latitude = parseFloat(data[0].lat);
    const longitude = parseFloat(data[0].lon);

    const map = L.map("map").setView(
      [latitude, longitude],
      12
    );

    L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution: "&copy; OpenStreetMap contributors"
      }
    ).addTo(map);


    // Marker for the map
    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup(
        `<b>${listingTitle}</b><br>${listingLocation}`
      )
      .openPopup();

  })
  .catch(error => {
    console.error("Map error:", error);
  });