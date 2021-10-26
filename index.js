// Log data
console.log("Tech track data:", techTrackData);

// Get all pets
let allPets = techTrackData.map((item) => {
  return item["Wat is je favoriete soort huisdier?"];
});

// Show all pets
console.log("Show all pets:", allPets);
