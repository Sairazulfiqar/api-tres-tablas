'use strict';
const fabricantes = require('../models/fabricantes.model');
exports.findAll = function(req, res) {
fabricantes.findAll(function(err, fabricantes) {
console.log('controller')
if (err)
res.send(err);
console.log('res', fabricantes);
res.send(fabricantes);
});
};

exports.create = function(req, res) {
const new_fabricantes = new fabricantes(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
res.status(400).send({ error:true, message: 'Please provide all required field'
});

}else{
fabricantes.create(new_fabricantes, function(err, fabricantes) {
if (err)
res.send(err);
res.json({error:false,message:"fabricantes added successfully!",data:fabricantes});
});
}
};

exports.findById = function(req, res) {
fabricantes.findById(req.params.id, function(err,fabricantes) {
if (err)
res.send(err);
res.json(fabricantes);
});
};

exports.update = function(req, res) {
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
res.status(400).send({ error:true, message: 'Please provide all required field'
});

}else{
fabricantes.update(req.params.id, new fabricantes(req.body), function(err, fabricantes) {
if (err)
res.send(err);
res.json({ error:false, message: 'fabricantes successfully updated' });
});

}
};
exports.delete = function(req, res) {
fabricantes.delete( req.params.id, function(err, fabricantes) {
if (err)
res.send(err);
res.json({ error:false, message: 'fabricantes successfully deleted' });
});
};