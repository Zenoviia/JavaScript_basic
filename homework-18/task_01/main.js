'use strict';


const BASE_URL = 'https://jsonplaceholder.typicode.com';

fetch(`${BASE_URL}/todos`)
    .then(response => response.json())
    .then(todos => {
        const todoTitles = todos.map(todo => todo.title);
        console.log('Todos:', todoTitles);
    });

fetch(`${BASE_URL}/comments`)
    .then(response => response.json())
    .then(comments => {
        const comentsBody = comments.map(comment => comment.body);
        console.log('Comments:', comentsBody);
    });

async function fetchUsers() {
    try {
        const response = await fetch(`${BASE_URL}/users`);
        const users = await response.json();
        const userInfo = users.map(user => ({ name: user.name, email: user.email }));
        console.log('Users` names and emails:', userInfo);
    } catch (error) {
        console.error(error.message);
    };
};

async function fetchPostsData() {
    try {
        const response = await fetch(`${BASE_URL}/posts`);
        const posts = await response.json();
        const postInfo = posts.map(post => ({ id: post.id, title: post.title }));
        console.log('Posts` ids and titles:', postInfo);
    } catch (error) {
        console.error(error.message);
    };
};

fetchUsers();
fetchPostsData();