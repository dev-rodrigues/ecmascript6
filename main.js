class TodoList {
    constructor() {
        this.todos = [];

    }

    addTodo() {
        this.todos.push('novo todo');
        console.log(this.todos);
    }
}