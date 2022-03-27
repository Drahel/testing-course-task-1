

function Build(nFloors) {
  if(typeof(nFloors)!="number") return "На вход принимается только число";
  if(nFloors < 1) return "Количество этажей не может быть меньше единицы";
  if(!Number.isInteger(nFloors)) return "Количество этажей не может быть дробным числом";

  var tower = [];
  for (var i = 0; i < nFloors; i++) {
  tower.push(" ".repeat(nFloors - i - 1)
  + "*".repeat((i * 2)+ 1)
  + " ".repeat(nFloors - i - 1))
  }
  return tower;
  }

module.exports = {Build}


// код для локального запуска //

// const prompt = require('prompt-sync')();

// var nFloors = prompt("Введите количество этажей: ");

// var tower = [];
// for (let i = 0; i < nFloors; i++) {
// tower.push(" ".repeat(nFloors - i - 1)
// + "*".repeat((i * 2)+ 1)
// + " ".repeat(nFloors - i - 1))
// }

// for(let i = 0; i < nFloors; i++){
//   console.log(tower[i]);
// }
