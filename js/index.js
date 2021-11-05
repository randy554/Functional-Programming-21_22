// Set API endpoint parameters
let apiKey = "d08928de0d5d4809aef8375899851622";
let phrases = "Ronaldo";
let language = "nl";
let sortBy = "relevancy";
let pageSize = 100;
let page = 1;
let fullDataset = [];
let endPoint = `https://newsapi.org/v2/everything?qInTitle=${phrases}&language=${language}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;

// Get data from News API
fetch(endPoint)
  .then((result) => result.json())
  .then((data) => {
    console.log("News articles:", data);
    return data;
  })
  .catch((err) => console.log(err));
