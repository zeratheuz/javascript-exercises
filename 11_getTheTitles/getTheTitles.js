const getTheTitles = function(books) { 
  return books.reduce((titles, book) => (titles.push(book.title),  titles),[])
};

// Do not edit below this line
module.exports = getTheTitles;
