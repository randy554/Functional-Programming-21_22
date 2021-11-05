let apiKey = "d08928de0d5d4809aef8375899851622";
let phrases = "Rutte";
let language = "nl";
// let sortBy = "relevancy";
let pageSize = 100;
let page = 1;
let fullDataset = [];

// Get paginated data from API
let getData = (endpoint) => {
  fetch(endpoint) // get data from API
    .then((result) => result.json()) // Turn result into JSON data
    .then((data) => {
      console.log("DB:", fullDataset);

      if (page <= totalPages(data.totalResults, pageSize)) {
        // Is there more data to get from API, get the data
        ++page; // update 'page' parameter for next call
        fullDataset = [...fullDataset, ...data.articles]; // Add the new articles data from fetch to previous articles array
        getData(
          `https://newsapi.org/v2/everything?qInTitle=${phrases}&language=${language}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`
        );
        return data;
      } else {
        // If there is no data left to fetch, log message
        console.log("Nothing left!");
      }
    })
    .catch((err) => console.log(err));
};

let totalPages = (totalItems, itemsPerPage) => {
  return Math.ceil(totalItems / itemsPerPage);
};

export { getData };
