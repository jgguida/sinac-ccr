const express = require('express');

const routes = express.Router();

const UsersControllers = require('./controllers/UsersController')

routes.get('/users', UsersControllers.index);
   // Users.create({ 
     //    name: 'Alexandre',
       //  age: 35,
         //rg: '8888888',
         //cpf: 999999999,
         //cnh:"21211212121",
         //vinculo: "clt",
         // })
   



module.exports = routes;

