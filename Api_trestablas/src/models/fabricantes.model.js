'use strict';
var dbConn = require('../../config/db.config');
//Employee object create
var fabricantes = function (productos) {
    this.fabricante_id = fabricantes.fabricante_id;
    this.nombre = fabricantes.nombre;
    this.created_at = new Date();
    this.updated_at = new Date();
};
fabricantes.create = function (newFab, result) {
    dbConn.query("INSERT INTO fabricantes set ?", newFab, function (err, res) {
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
fabricantes.findById = function (id, result) {
    dbConn.query("Select * from fabricantes where id = ? ", id, function (err,
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
fabricantes.findAll = function (result) {
    dbConn.query("Select * from fabricantes", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('fabricantes : ', res);
            result(null, res);
        }
    });
};
fabricantes.update = function (id, fabricantes, result) {
    dbConn.query("UPDATE fabricantes SET fabricante_id=?,nombre=? WHERE id = ?",
        [fabricantes.fabricante_id, fabricantes.nombre, id], function (err,
            res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
fabricantes.delete = function (id, result) {
    dbConn.query("DELETE FROM fabricantes WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = fabricantes;