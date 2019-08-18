"use strict";

var arr = [1, 2, 3, 4, 5, 6]; // usando arrow functions
// funções normal

var newArr = arr.map(function (item) {
  return item * 2;
}); // função anonima

var newArrArrow = arr.map(function (item) {
  return item * 2;
});

var teste = function teste() {
  return "teste";
};

var teste2 = function teste2() {
  return [1, 2, 3, 4, 5];
};

var teste3 = function teste3() {
  return {
    nome: 'carlos henrique'
  };
};

var teste4 = function teste4() {
  return {
    nome: "carlos henrique"
  };
};

console.log(arr);
console.log(newArr);
console.log(newArrArrow);
console.log(teste);
console.log(teste2);
console.log(teste3);
