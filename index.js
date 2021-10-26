// Log data
console.log("Tech track data:", techTrackData);

// Get all pets
let allPets = techTrackData.map((item) => {
  return item["Wat is je favoriete soort huisdier?"];
});

// Show all pets
console.log("Show all pets:", allPets);

// Change all pets with firstletter uppercase
let upperCaseFirstLetter = allPets.map((item) => {
  // console.log("Caps pet:", item.toUpperCase());
  // console.log("Caps pet:", item.charAt(0).toUpperCase() + item.slice(1));
  // console.log("Caps pet:", item.slice(1));
  return item.charAt(0).toUpperCase() + item.slice(1);
});

// Show all pets with firstletter uppercase
console.log("Pets with firstletter uppercase:", upperCaseFirstLetter);
