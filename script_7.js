console.log("===================>>> script_7.js <<<===================")


const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

let booksNew = books;

function rentedAll(booksNew){
  let numBookRent = []
  booksNew.forEach(book => {
    if (book['rented'] > 0) {
      numBookRent.push(book['rented']);
    };
  });
  if (numBookRent.length === booksNew.length){
    return true;
  } else {
    return false;
  };
};

console.log("Les bouquins ont-ils été tous empruntés ?");
console.log(rentedAll(booksNew));

function mostRented(booksNew){
  let numBookRent = []
  booksNew.forEach(book => {
    numBookRent.push(book['rented']);
  });
  let indexOfMax = numBookRent.indexOf(Math.max(...numBookRent));
  console.log(booksNew[indexOfMax]);
};

console.log("Le bouquin le plus loué :");
mostRented(booksNew);

function leastRented(booksNew){
  let numBookRent = []
  booksNew.forEach(book => {
    numBookRent.push(book['rented']);
  });
  let indexOfMin = numBookRent.indexOf(Math.min(...numBookRent));
  console.log("Le bouquin le moins loué :");
  console.log(booksNew[indexOfMin]);
};

leastRented(booksNew);

function findId(booksNew, id){
  console.log(`Le bouquin n° ${id} est :`);
  let zeBook;
  booksNew.forEach(book => {
    if (book['id'] === id) {
      zeBook = book;
    };
  });
  return zeBook;
};
console.log(findId(booksNew, 873495));

function deleteBook(booksNew, id){
  let curatedBooks = []
  booksNew.forEach(book => {
    if (book['id'] !== id){
      curatedBooks.push(book);
    } else {
      console.log(`Suppression de ${book}`);
    };
  });
  return curatedBooks;
};

console.log(deleteBook(booksNew, 133712));


function booksSorted(booksNew){
  let titleBook = []
  booksNew.forEach(book => {
    titleBook.push(book['title']);
  });
  titleBook.sort();
  return titleBook;
};
console.log("Liste des bouquins rangée alphabétiquement :");
console.log(booksSorted(booksNew));
