function findOldestBook(books) {
  let oldestBook = books[0];
  for (let i = 1; i < books.length; i++) {
    if (books[i].year < oldestBook.year) {
      oldestBook = books[i];
    }
  }
  return oldestBook;
}

function findAuthorWithMostBooks(books) {
  const authorCounts = {};
  let maxAuthor = "";
  let maxCount = 0;

  for (let i = 0; i < books.length; i++) {
    const author = books[i].author;
    if (authorCounts[author] === undefined) {
      authorCounts[author] = 1;
    } else {
      authorCounts[author]++;
    }

    if (authorCounts[author] > maxCount) {
      maxCount = authorCounts[author];
      maxAuthor = author;
    }
  }

  return maxAuthor;
}

function findBooksByAuthor(books, authorName) {
  const booksByAuthor = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].author === authorName) {
      booksByAuthor.push(books[i]);
    }
  }
  return booksByAuthor;
}

function countBooksByGenre(books) {
  const genreCounts = {};
  for (let i = 0; i < books.length; i++) {
    const genre = books[i].genre;
    if (genreCounts[genre] === undefined) {
      genreCounts[genre] = 1;
    } else {
      genreCounts[genre]++;
    }
  }
  return genreCounts;
}

const books = [
  { title: "Book 1", author: "Author A", year: 1990, genre: "Science Fiction" },
  { title: "Book 2", author: "Author B", year: 1985, genre: "Mystery" },
  { title: "Book 3", author: "Author A", year: 2005, genre: "Science Fiction" },
  { title: "Book 4", author: "Author C", year: 1998, genre: "Fantasy" },
];

console.log("Oldest Book:", findOldestBook(books));
console.log("Author with Most Books:", findAuthorWithMostBooks(books));
console.log("Books by Author A:", findBooksByAuthor(books, "Author A"));
console.log("Count of Books by Genre:", countBooksByGenre(books));
