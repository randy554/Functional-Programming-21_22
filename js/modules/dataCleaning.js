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

// Replace value(s) from the list
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

// Change all values from list to firstletter uppercase
let uppercaseFirstLetterValueFromList = (list) => {
  return list.map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1);
  });
};

export {
  getSourceFrmList,
  listBySourceName,
  removeWordFromValue,
  uppercaseFirstLetterValueFromList,
};
