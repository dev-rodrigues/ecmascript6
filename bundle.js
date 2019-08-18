"use strict";

var usuario = {
  nome: "carlos",
  idade: 24,
  endereco: {
    cidade: "Rio de janeiro",
    estado: "RJ"
  }
}; // console.log(usuario);
// console.log(usuario.nome);
// console.log(usuario.idade);
// console.log(usuario.endereco.cidade);
// // usando Desestruturação
// const { nome, idade } = usuario;
// console.log(nome);
// console.log(idade);
// const { nome, idade, endereco: { cidade, estado } } = usuario;
// console.log(cidade);
// console.log(estado);
// const { cidade, estado } = usuario.endereco;
// console.log(cidade);
// console.log(estado);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
