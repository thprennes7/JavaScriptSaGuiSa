console.log("===================>>> script_2.js <<<===================")

function factorialDo{
  let numFactory = prompt("De quel nombre veut tu calculer la factorielle ?"), factorial = 1;

  for(numFactory; numFactory > 0; numFactory--){
    factorial *= numFactory;
  };
  return factorial;
};

console.log(factorialDo);
