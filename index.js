// Log data
console.log("Tech track data:", techTrackData);

// Get all pets
let allPets = techTrackData.map((item) => {
  return item["Wat is je favoriete soort huisdier?"];
});

// Show all pets
console.log("Show all favorite pet answers:", allPets);

// Remove witespace from listAnswers
let removeWhitespacFromList = (list) => {
  return list.map((item) => {
    return item.trim();
  });
};

let trimmedList = removeWhitespacFromList(allPets);
console.log("Trim all answers", trimmedList);

// Change all pets with firstletter uppercase
let upperCaseFirstLetter = allPets.map((item) => {
  // console.log("Caps pet:", item.toUpperCase());
  // console.log("Caps pet:", item.charAt(0).toUpperCase() + item.slice(1));
  // console.log("Caps pet:", item.slice(1));
  return item.charAt(0).toUpperCase() + item.slice(1);
});

// Show all pets with firstletter uppercase
console.log("Pet answers with firstletter uppercase:", upperCaseFirstLetter);

// Get the first word of an answer if it contains a specific word/sign in answer
let getFirstAnswerBasedOnContentsAnswer = (listAnswers, contents) => {
  return listAnswers.map((item) => {
    if (item.includes(contents)) {
      return item.split(" ")[0];
    } else {
      return item;
    }
  });
};

// Show the first answers only from the list of answers
console.log(
  "Pet answers with only one answer",
  getFirstAnswerBasedOnContentsAnswer(upperCaseFirstLetter, " of")
);

// Filter on animal value
let filterOnAnimalValue = (list, animalValue) => {
  return list.filter((item) => {
    if (item == animalValue) {
      return item;
    }
  });
};

// Show list based on value
console.log(
  "Show list based on value:",
  filterOnAnimalValue(
    getFirstAnswerBasedOnContentsAnswer(upperCaseFirstLetter, " of"),
    "Hond"
  )
);
