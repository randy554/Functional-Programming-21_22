// fetch dataset from url

// Get dataset from URL
fetch(
  "https://raw.githubusercontent.com/cmda-tt/course-21-22/main/tech-track-dataset.json"
)
  .then((result) => result.json())
  .then((techTrackData) => {
    console.log("Dataset from url:", techTrackData);
    return techTrackData;
  })
  .then((techTrackData) => {
    // Show all favorite pet answers
    console.log(
      "Show all favorite pet answers:",
      showAllAnswersFromQuestion(
        techTrackData,
        "Wat is je favoriete soort huisdier?"
      )
    );
    return techTrackData;
  })
  .then((techTrackData) => {
    let trimmedList = removeWhitespacFromList(
      showAllAnswersFromQuestion(
        techTrackData,
        "Wat is je favoriete soort huisdier?"
      )
    );
    console.log("Trim all answers", trimmedList);
    return techTrackData;
  })
  .then((techTrackData) => {
    // Show all pets with firstletter uppercase
    console.log(
      "Pet answers with firstletter uppercase:",
      uppercaseFirstLetterAnswersFromList(
        showAllAnswersFromQuestion(
          techTrackData,
          "Wat is je favoriete soort huisdier?"
        )
      )
    );
    return techTrackData;
  })
  .then((techTrackData) => {
    // Show the first answers only from the list of answers
    console.log(
      "Pet answers with only one answer",
      getFirstAnswerBasedOnContentsAnswer(
        uppercaseFirstLetterAnswersFromList(
          showAllAnswersFromQuestion(
            techTrackData,
            "Wat is je favoriete soort huisdier?"
          )
        ),
        " of"
      )
    );
    return techTrackData;
  })
  .then((techTrackData) => {
    // Show list based on value
    console.log(
      "Show list based on value:",
      filterOnAnimalValue(
        getFirstAnswerBasedOnContentsAnswer(
          uppercaseFirstLetterAnswersFromList(
            showAllAnswersFromQuestion(
              techTrackData,
              "Wat is je favoriete soort huisdier?"
            )
          ),
          " of"
        ),
        "Hond"
      )
    );
    return techTrackData;
  })
  .then((techTrackData) => {
    // Show list with a replaced value
    console.log(
      "A list with a replaced value:",
      replaceValueFromList(
        getFirstAnswerBasedOnContentsAnswer(
          uppercaseFirstLetterAnswersFromList(
            showAllAnswersFromQuestion(
              techTrackData,
              "Wat is je favoriete soort huisdier?"
            )
          ),
          " of"
        ),
        "Dachshund",
        "Hond"
      )
    );
    return techTrackData;
  })
  .catch((err) => console.log("Fetch failed!:", err));

// Get all answers from list
let showAllAnswersFromQuestion = (list, question) => {
  // Return list with answers from question
  return list.map((item) => {
    return item[question];
  });
};

// Remove witespace from listAnswers
let removeWhitespacFromList = (list) => {
  return list.map((item) => {
    return item.trim();
  });
};

// Change all answers from list to firstletter uppercase
let uppercaseFirstLetterAnswersFromList = (list) => {
  return list.map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1);
  });
};

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

// Filter on animal value
let filterOnAnimalValue = (list, animalValue) => {
  return list.filter((item) => {
    if (item == animalValue) {
      return item;
    }
  });
};

// Replace a value from the list
let replaceValueFromList = (list, replace, replaceWith) => {
  return list.map((item) => {
    // If replace value is found in the list, replace it with new value
    if (item == replace) {
      return item.replaceAll(replace, replaceWith);
    } else {
      // Else just return regular value
      return item;
    }
  });
};
