// constantes não podem ter seu valor reatribuído;
// const = read-only, ou seja, após definido o seu valor
// constantes permitem somente leitura;
// const a = 1;
// console.log(a);
// a = 3;
// console.log(a);

////////////////////////////////////////////////////////////
// podemos mutar uma constante
// const usuario = {
//     nome: "carlos henrique"
// }
// console.log(usuario.nome);

// usuario.nome = "Diego";
// console.log(usuario.nome);

////////////////////////////////////////////////////////////
// let tem seu valor visivel dentro do escopo da função
// function teste(x) {
//     let y = 2;
//     console.log(y);
    
//     if (x > 5) {
//         // variavel y pode ser acessada daqui
//         let y = 4;
//         console.log(x, y);
        
//     }
// }
// // variavel y não é acessivel daqui
// //  console.log(y);
// console.log(teste(10));
////////////////////////////////////////////////////////////
