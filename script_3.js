console.log("===================>>> script_3.js <<<===================")

let numFloor = prompt("Bienvenue dans Pyramide builder ! Combien veux tu d'étages ?"), stair = "#", space = " ";

for(i = numFloor; i > 0; i--){
  let floor = "";
  for(let j = i - 1; j > 0; j--){
    floor += space;
  };
  for(j = numFloor - floor.length - 1; j >= 0; j--){
    floor += stair;
  };
  console.log(floor);
};
