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

console.log(rentedAll(booksNew));