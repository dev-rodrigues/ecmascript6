
// ADICIONANDO VALOR PADRÃO PARA UMA FUNÇÃO
function soma(a = 3, b = 6) {
    return a + b;
}
console.log(soma(1));
console.log(soma());


const soma2 = (a = 2, b =3) => a + b;
console.log(soma());
