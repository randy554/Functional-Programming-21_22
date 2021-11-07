// Set API endpoint parameters
let apiKey = "d08928de0d5d4809aef8375899851622";
let phrases = "Ronaldo";
let language = "nl";
let sortBy = "relevancy";
let pageSize = 100;
let page = 1;
let fullDataset = [];
let newsSource1 = "www.ad.nl";
let newsSource2 = "telegraaf.nl";
let allNewsEndPoint = `https://newsapi.org/v2/everything?qInTitle=${phrases}&language=${language}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;
let fromTwoSourcesEndPoint = `https://newsapi.org/v2/everything?qInTitle=${phrases}&language=${language}&page=${page}&pageSize=${pageSize}&domains=${newsSource1},${newsSource2}&apiKey=${apiKey}`;

// Get data from News API
fetch(allNewsEndPoint)
  .then((result) => result.json())
  .then((data) => {
    console.log("News articles:", data);
    return data;
  })
  .then((data) => {
    let sourceL = getSourceFrmList(data.articles);
    console.log("List with sources:", sourceL);
    let withoutW = removeWordFromValue(sourceL, "Www.", "");
    console.log("List with wwww:", withoutW);
    let capFirstL = uppercaseFirstLetterValueFromList(withoutW);
    console.log("List with first letter cap:", capFirstL);
    let newList = listBySourceName(capFirstL);
    console.table("List by source:", newList);
  })
  .catch((err) => console.log(err));

// Get source name from list
let getSourceFrmList = (data) => {
  return data.map((article) => {
    console.log("Source:", article.source.name);
    return article.source.name;
  });
};

// Make lists by source name
let listBySourceName = (list) => {
  return list.reduce((sourceList, sourceName) => {
    // If sourceName doesn't exist as an object property, then create new object property with a new array vallue & push sourceName into it as it's value
    if (!sourceList.hasOwnProperty(sourceName)) {
      sourceList[sourceName] = [sourceName];
    } else {
      // If it exist push another sourceName on to the array list
      sourceList[sourceName].push(sourceName);
    }

    return sourceList;
  }, {});
};

// Replace a value from the list
let removeWordFromValue = (list, replace, replaceWith) => {
  return list.map((item) => {
    // If replace value is found in the list, replace it with the new value
    if (item.includes(replace)) {
      return item.replaceAll(replace, replaceWith);
    } else {
      // Else just return regular value
      return item;
    }
  });
};

// Change all answers from list to firstletter uppercase
let uppercaseFirstLetterValueFromList = (list) => {
  return list.map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1);
  });
};
