const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
let entrepreneursNew = entrepreneurs;

function bornInTheUsa(entrepreneursNew) {
  let bornInThe70s = [];
  entrepreneursNew.forEach(entrepreneur => {
    if (entrepreneur['year'] >= 1970 && entrepreneur['year'] <= 1979){
      bornInThe70s.push(entrepreneur);
    };
  });
  console.log(bornInThe70s);
};
bornInTheUsa(entrepreneursNew);

function entrepreneursName(entrepreneursNew){
  let name = [];
  entrepreneursNew.forEach(entrepreneur => {
    let tempName = [];
    tempName.push(entrepreneur['first']);
    tempName.push(entrepreneur['last']);
    name.push(tempName);
  });
  console.log(name);
};

entrepreneursName(entrepreneursNew);

function entrepreneursAge(entrepreneursNew){
  entrepreneursNew.forEach(entrepreneur => {
    let currentAge = 0;
    currentAge = 2019 - entrepreneur['year'];
    console.log(`${entrepreneur['first']} ${entrepreneur['last']} aurait eu ${currentAge} ans aujourd'hui`);
  });
};
entrepreneursAge(entrepreneursNew);

// function entrepreneurLast(entrepreneursNew){
//   let entrepreneurSort = entrepreneursNew;
//   entrepreneurSort.sort(function(a, b){
//     return a['last'] - b["last"];
//   });
//   console.log(entrepreneurSort);
// };

function entrepreneurSortByLast(entrepreneursNew){
  let lastName = [], entrepreneurSorted = [];
  entrepreneursNew.forEach(entrepreneur => {
    lastName.push(entrepreneur['last']);
  });
  lastName.sort();
  lastName.forEach(name => {
    entrepreneursNew.forEach(entrepreneur => {
      if (name === entrepreneur['last']){
          entrepreneurSorted.push(entrepreneur);
      };
    });
  });
  console.log(entrepreneurSorted);
};

entrepreneurSortByLast(entrepreneursNew);
