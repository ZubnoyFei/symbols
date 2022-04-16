// let id = Symbol("id");
//
// const obj = {
//     'name': 'test',
//     [id] : 1,
//     getId: function(){
//         return this[id]
//     }
// };
//
// // let id = Symbol("id");
// //
// // obj[id] = 1;
//
// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);
//
// //for (let value in obj) console.log(value);
//

const myAwesomeDatabase = {
    movies:[],
    actors: [],
[Symbol("id")]:123
}

    //Сторонний код библиотеки

myAwesomeDatabase.id = '15632156320';

console.log(myAwesomeDatabase["id"]);
console.log(myAwesomeDatabase);