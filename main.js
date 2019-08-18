const arr = [1, 2, 3, 4, 5, 6];

// usando arrow functions
// funções normal
const newArr = arr.map(function (item) {
    return item * 2;
});
// função anonima
const newArrArrow = arr.map((item) => item * 2);

const teste = () => {
    return "teste";
}

const teste2 = () => [1,2,3,4,5];

const teste3 = () => {
    return {
        nome: 'carlos henrique'
    }
};

const teste4 = () => ({
    nome: "carlos henrique"
})
console.log(arr);
console.log(newArr);
console.log(newArrArrow);
console.log(teste);
console.log(teste2);
console.log(teste3);

