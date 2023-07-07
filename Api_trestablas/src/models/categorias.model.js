'use strict';
var dbConn = require('../../config/db.config');
//Employee object create
var categorias = function (categorias) {
    this.categorias_id = categorias.categorias_id;
    this.nombre = categorias.nombre;
    this.created_at = new Date();
    this.updated_at = new Date();
};
categorias.create = function (newCat, result) {
    dbConn.query("INSERT INTO categorias set ?", newCat, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
categorias.findById = function (id, result) {
    dbConn.query("Select * from categorias where id = ? ", id, function (err,
        res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
categorias.findAll = function (result) {
    dbConn.query("Select * from categorias", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('categorias : ', res);
            result(null, res);
        }
    });
};
categorias.update = function (id, categorias, result) {
    dbConn.query("UPDATE categorias SET categorias_id=?,nombre=? WHERE id = ?",
        [categorias.categorias_id, categorias.nombre, id], function (err,
            res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
categorias.delete = function (id, result) {
    dbConn.query("DELETE FROM categorias WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = categorias;