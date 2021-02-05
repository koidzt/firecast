//index.js

const functions = require('firebase-functions');
const app = require('express')();

const { getAllTodos } = require('./APIs/todos');
const { getUser } = require('./APIs/user');

app.get('/todos', getAllTodos);
app.get('/user', getUser);

exports.api = functions.https.onRequest(app);
