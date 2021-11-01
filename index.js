// Set API endpoint parameters
let apiKey = "d08928de0d5d4809aef8375899851622";
let phrases = "covid";
let language = "nl";
let sortBy = "relevancy";
let pageSize = 50;
let page = 1;

let endPoint = `https://newsapi.org/v2/everything?qInTitle=${phrases}&language=${language}&pageSize=${pageSize}&apiKey=${apiKey}`;

// Get data from News API
fetch(endPoint)
  .then((result) => result.json())
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
