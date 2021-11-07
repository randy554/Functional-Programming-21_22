import {
  getSourceFrmList,
  listBySourceName,
  removeWordFromValue,
  uppercaseFirstLetterValueFromList,
} from "./modules/dataCleaning.js";

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
