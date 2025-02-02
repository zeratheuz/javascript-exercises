const removeFromArray = function(array = [], ...removedItems) {
  for (removedItem of removedItems) {
    while (array.includes(removedItem)) {
      array.splice(array.indexOf(removedItem), 1)
    }
  }
  return array
};

// Do not edit below this line
module.exports = removeFromArray;
