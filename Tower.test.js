import {Build} from "./Tower";
import supertest from "supertest"
const request = supertest("http://localhost:8191/")

test('clear database', async() => {
  const requestV = await request
    .delete("database/clear")


  expect(requestV.statusCode).toBe(200);
});

test('create new dataPack', async() => {
  const input = 1
  const dataPack = { 
    input, 
    output: Build(input)
  }
  const newDataPack = await request
    .post("database/create")
    .send(dataPack);


  expect(newDataPack.statusCode).toBe(200);


  expect(newDataPack.body.input).toBe("1");


  expect(newDataPack.body.output).toBe(["*"]);
});

test('get full info', async() => {
  const requestV = await request
    .get("database/full")


  expect(requestV.statusCode).toBe(200);


  expect(Array.isArray(requestV.body)).toBe(true);
});








// const {Build} = require('./Tower')

// describe("Valid input", () => {
//     it.each([
//       [1, ["*"]],

//       [3, ["  *  ",
//            " *** ",
//            "*****"]],

//       [5, ["    *    ",
//            "   ***   ",
//            "  *****  ",
//            " ******* ",
//            "*********"]],

//       [15, ["              *              ",
//             "             ***             ",
//             "            *****            ",
//             "           *******           ",
//             "          *********          ",
//             "         ***********         ",
//             "        *************        ",
//             "       ***************       ",
//             "      *****************      ",
//             "     *******************     ",
//             "    *********************    ",
//             "   ***********************   ",
//             "  *************************  ",
//             " *************************** ",
//             "*****************************"]],

//       [25, ["                        *                        ",
//             "                       ***                       ",
//             "                      *****                      ",
//             "                     *******                     ",
//             "                    *********                    ",
//             "                   ***********                   ",
//             "                  *************                  ",
//             "                 ***************                 ",
//             "                *****************                ",
//             "               *******************               ",
//             "              *********************              ",
//             "             ***********************             ",
//             "            *************************            ",
//             "           ***************************           ",
//             "          *****************************          ",
//             "         *******************************         ",
//             "        *********************************        ",
//             "       ***********************************       ",
//             "      *************************************      ",
//             "     ***************************************     ",
//             "    *****************************************    ",
//             "   *******************************************   ",
//             "  *********************************************  ",
//             " *********************************************** ",
//             "*************************************************"]],
//     ])(
//       `Should return %i-storey tower`,
//       (x, result) => {
//         expect(Build(x)).toEqual(result);
//       }
//     );
//   });



// describe("Invalid input value", () => {
//     test.each([
//       {x: -4, name: 'Should return input value error(negative number)', res: "Количество этажей не может быть меньше единицы"},
//       {x: 0, name: 'Should return input value error(zero)',res: "Количество этажей не может быть меньше единицы"},
//       {x: 2.5,name: 'Should return input value error(float)',res: "Количество этажей не может быть дробным числом"},
//     ])(
//       `$name`,
//       ({x, name, res}) => {
//         expect(Build(x)).toEqual(res);
//       }
//     );
//   });   


//   describe("Invalid input type", () => {
//     test.each([
//       {x:"Three", name: 'Should return input type error(string)', res: "На вход принимается только число"},
//       {x: '3', name: 'Should return input type error(string) v2',res: "На вход принимается только число"},
//       {x: ["3"],name: 'Should return input type error(array)',res: "На вход принимается только число"},
//       {x: null ,name: 'Should return input type error(null)',res: "На вход принимается только число"},
//       {x: undefined,name: 'Should return input type error(undefined)',res: "На вход принимается только число"},
//       {x: "",name: 'Should return input type error(empty string)',res: "На вход принимается только число"},
//     ])(
//       `$name`,
//       ({x, name, res}) => {
//         expect(Build(x)).toEqual(res);
//       }
//     );
//   });   


