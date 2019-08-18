"use strict";

var arr = [1, 2, 3, 4, 5, 6, 7, 9];
console.log(arr); // USANDO MAP
//  const newArr = arr.map(function(item)) {     
//      return item *2;
//  });
//  console.log(newArr);
//  const newArr = arr.map(function(item, index)) {     
//      return item * index;
//  });
//  console.log(newArr);
////////////////////////////////////////////////////////////
// USANDO REDUCE
//  const sun = arr.reduce(function(total, next) {
//     return total + next;
//  });
// primeira passada:
// total = 0
// next = 1
// segunda passada
// total = 1;
// next = 2;
// terceira passada
// total = 3;
// next = 3;
// console.log(sun);
////////////////////////////////////////////////////////////
// USANDO O FILTER
// retorna um novo vetor
// const filter =  arr.filter(function(item) {
//     return item % 2 === 0;
// });
// console.log(filter);
////////////////////////////////////////////////////////////
// USANDO O FIND
// quando localiza o elemento: retorna o elemento
// quando não localiza o elemento: retorna undefined
// const find = arr.find(function(item) {
//     return item === 4;
// });
// console.log(find);
