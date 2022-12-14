const express = require('express')
const routes = express.Router();
const Usuario = require('./controllers/usuario.controllers');
const Produto = require('./controllers/produtos.controller');

routes.get('/api',Usuario.index );
//Rotas de Usuarios
routes.post('/api/usuarios', Usuario.create);
routes.get('/api/usuarios',Usuario.index );
routes.get('/api/usuarios.details/:_id',Usuario.details);
routes.delete('/api/usuarios.delete/:_id',Usuario.delete);
routes.put('/api/usuarios',Usuario.update);

//Rotas de Produto
routes.post('/api/produtos', Produto.create);
routes.get('/api/produtos',Produto.index );
routes.get('/api/produtos/:_id',Produto.details);
routes.delete('/api/produtos/:_id',Produto.delete);
routes.put('/api/produtos',Produto.update);



  module.exports = routes;