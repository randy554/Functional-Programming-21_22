import API_KEY from "./apiKey.js";

// Set API endpoint parameters
let phrases = "Ronaldo";
let language = "nl";
let sortBy = "relevancy";
let pageSize = 20;
let page = 1;
let totalNumberPages;
let fullDataset = [];

let endPoint = `https://newsapi.org/v2/everything?qInTitle=${phrases}&language=${language}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;

let getData = (endpoint) => {
  fetch(endpoint)
    .then((result) => result.json())
    .then((data) => {
      console.log("DB:", fullDataset);
      if (page <= totalPages(data.totalResults, pageSize)) {
        ++page;
        fullDataset = [...fullDataset, ...data.articles];
        getData(
          `https://newsapi.org/v2/everything?qInTitle=${phrases}&language=${language}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`
        );
        return data;
      } else {
        console.log("Niets meer");
        return data;
      }
    })
    .then((someting) => {
      console.log("We got something:", someting);
    })
    .catch((err) => console.log(err));
};

getData(endPoint);

// // Get data from News API
// getData(endPoint)
//   // fetch(endPoint)
//   // .then((result) => result.json())
//   .then((data) => {
//     console.log("Totaal aantal artikelen:", data.totalResults);
//     console.log("Artikelen per pagina:", pageSize);
//     console.log("Aantal pagina's:", totalPages(data.totalResults, pageSize));
//     totalNumberPages = totalPages(data.totalResults, pageSize);
//     console.log("wat:", data);
//     return data;
//   })
//   .then((data) => {
//     console.log(
//       "Binnen data - Pagenumber: " + page++ + " Totalpages: " + totalNumberPages
//     );
//     return checkForMorePages(page++, totalNumberPages);
//   })
//   .then((finalData) => {
//     console.log("Final data:", finalData);
//   })
//   .catch((err) => console.log(err));

let totalPages = (totalItems, itemsPerPage) => {
  return Math.ceil(totalItems / itemsPerPage);
};

let checkForMorePages = (pageNumber, totalPages) => {
  console.log("Pagenumber: " + pageNumber + " Totalpages: " + totalPages);
  if (pageNumber <= totalPages) {
    return getData(
      `https://newsapi.org/v2/everything?qInTitle=${phrases}&language=${language}&page=${pageNumber}&pageSize=${pageSize}&apiKey=${apiKey}`
    );
  } else {
    return false;
  }
};
