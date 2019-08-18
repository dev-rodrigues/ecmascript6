class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
        
    }
}


// conceito de herança
class TodoList extends List{

}

const MinhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function() {
    MinhaLista.add('Estou usando herança');
}