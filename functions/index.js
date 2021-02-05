//index.js

const functions = require('firebase-functions');
const app = require('express')();
const { getUser } = require('./APIs/user');
const { getAllTodos, postOneTodo, deleteTodo, editTodo } = require('./APIs/todos');

app.get('/user', getUser);

app.get('/todos', getAllTodos);
app.post('/todo', postOneTodo);
app.delete('/todo/:todoId', deleteTodo);
app.put('/todo/:todoId', editTodo);

exports.api = functions.https.onRequest(app);
