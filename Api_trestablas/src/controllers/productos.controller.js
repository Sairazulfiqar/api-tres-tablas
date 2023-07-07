'use strict';
const productos = require('../models/productos.model');
exports.findAll = function(req, res) {
productos.findAll(function(err, productos) {
console.log('controller')
if (err)
res.send(err);
console.log('res', productos);
res.send(productos);
});
};

exports.create = function(req, res) {
const new_productos = new productos(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
res.status(400).send({ error:true, message: 'Please provide all required field'
});

}else{
productos.create(new_productos, function(err, productos) {
if (err)
res.send(err);
res.json({error:false,message:"productos added successfully!",data:productos});
});
}
};

exports.findById = function(req, res) {
productos.findById(req.params.id, function(err,productos) {
if (err)
res.send(err);
res.json(productos);
});
};

exports.update = function(req, res) {
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
res.status(400).send({ error:true, message: 'Please provide all required field'
});

}else{
productos.update(req.params.id, new productos(req.body), function(err, productos) {
if (err)
res.send(err);
res.json({ error:false, message: 'productos successfully updated' });
});

}
};
exports.delete = function(req, res) {
productos.delete( req.params.id, function(err, productos) {
if (err)
res.send(err);
res.json({ error:false, message: 'productos successfully deleted' });
});
};