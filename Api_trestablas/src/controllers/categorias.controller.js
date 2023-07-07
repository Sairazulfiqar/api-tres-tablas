'use strict';
const categorias = require('../models/categorias.model');
exports.findAll = function(req, res) {
categorias.findAll(function(err, categorias) {
console.log('controller')
if (err)
res.send(err);
console.log('res', categorias);
res.send(categorias);
});
};

exports.create = function(req, res) {
const new_categorias = new categorias(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
res.status(400).send({ error:true, message: 'Please provide all required field'
});

}else{
categorias.create(new_categorias, function(err, categorias) {
if (err)
res.send(err);
res.json({error:false,message:"categorias added successfully!",data:categorias});
});
}
};

exports.findById = function(req, res) {
categorias.findById(req.params.id, function(err,categorias) {
if (err)
res.send(err);
res.json(categorias);
});
};

exports.update = function(req, res) {
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
res.status(400).send({ error:true, message: 'Please provide all required field'
});

}else{
categorias.update(req.params.id, new categorias(req.body), function(err, categorias) {
if (err)
res.send(err);
res.json({ error:false, message: 'categorias successfully updated' });
});

}
};
exports.delete = function(req, res) {
categorias.delete( req.params.id, function(err, categorias) {
if (err)
res.send(err);
res.json({ error:false, message: 'categorias successfully deleted' });
});
};