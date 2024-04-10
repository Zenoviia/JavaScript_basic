'use strict';


class TodoList {
    constructor() {
        this.todos = [];
    }
    #show() {
        this.todos.forEach((todo, i) => {
            console.log(`${i +1}) ${todo}`);
        })
    }
    addTask(task){
        this.todos.push(task);
        this.#show();
    }
    removeTask(task) {
        this.todos = this.todos.filter((todo => todo !== task));
        this.#show();
    }
}

const todoList = new TodoList(); 
todoList.addTask("Погуляти з собакою");
// 1. Погуляти з собакою

todoList.addTask("Зробити ДЗ по JavaScript");
// 1. Погуляти з собакою
// 2. Зробити ДЗ по JavaScript

todoList.addTask("Подивитись серіал");
// 1. Погуляти з собакою
// 2. Зробити ДЗ по JavaScript
// 3. Подивитись серіал

todoList.removeTask("Погуляти з собакою");
// 1. Зробити ДЗ по JavaScript
// 2. Подивитись серіал

// todoList.#show(); // Error (метод внутрішній)