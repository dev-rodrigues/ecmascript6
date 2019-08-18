const usuario = {
    nome: "carlos",
    idade: 24,
    endereco: {
        cidade: "Rio de janeiro",
        estado: "RJ"
    },
};

// console.log(usuario);
// console.log(usuario.nome);
// console.log(usuario.idade);
// console.log(usuario.endereco.cidade);

// // usando Desestruturação
// const { nome, idade } = usuario;
// console.log(nome);
// console.log(idade);

const { nome, idade, endereco: { cidade, estado } } = usuario;
console.log(cidade);
console.log(estado);



// const { cidade, estado } = usuario.endereco;
// console.log(cidade);
// console.log(estado);



