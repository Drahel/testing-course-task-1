

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



    var field = document.getElementById('field');
    var butStart = document.getElementById('start');
    var floors = document.querySelector('input');
    var butSave = document.getElementById('save');
    var butClear = document.getElementById('clear');
    
    
    butStart.onclick = function() {
      field.innerHTML = Build(Number(floors.value)).toString().replaceAll(',',"&#13;&#10;");
      var input = floors.value;
      var output = Build(Number(floors.value)).toString();
    }
    
    ShowDatabase();
    
    butSave.onclick = function(){
      Save();
    }
    
    butClear.onclick = function(){
      DELETE();
    }




//Основные запросы для бд

export async function POST(url, data) {
    try {
        const response = await fetch(url, {
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            method: "POST",
            body: JSON.stringify(data),
        })
        return await response.json()



    } catch (error) {
        return console.error(error)
    }
}

export async function DELETE() {
    try {
        await fetch("http://localhost:8191/database/clear", {
            method: "DELETE",
        }).then(() => ShowDatabase())



    } catch (error) {
        console.log(error)
    }
}


export async function GET() {
    try {
        const response = await fetch("http://localhost:8191/database/full")
        return await response.json()



    } catch (error) {
        return console.error(error)
    }
}


function ShowDatabase() {
    GET()
        .then((infoPack) => {
            console.log("Database:")
            infoPack.forEach(element => {
                ConsoleOutput(element)
            })
        })
}


function ConsoleOutput(element) {
    console.log("Input - " + element.input + " / Output - " + element.output);
 }
 

function Save() {
  let output = Build(Number(floors.value));
  let input = floors.value;
  let dataPack = {input, output}
  POST("http://localhost:8191/database/create", dataPack)
      .then(() =>  ShowDatabase())
}










// module.exports = {Build}


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
