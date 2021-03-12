const express = require('express');
const router = express.Router();

const mysqlconnection = require('../database');

router.get('/', (req, res) => {
    mysqlconnection.query('SELECT * FROM Persona',(err, rows, fields)=> {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})

router.get('/:id', (req, res)=>{
    const { id } = req.params;
    mysqlconnection.query('SELECT * FROM Persona Where id=?',[id], (err, rows, fields) => {
        if (!err) {
          res.json(rows[0]);
        } else {
          console.log(err);
        }
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM Persona WHERE id = ?', [id], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Persona Deleted'});
      } else {
        console.log(err);
      }
    });
});

router.post('/', (req, res) => {
    const {id, name, salary} = req.body;
    console.log(id, nombres, apellidos, idtipodocumento, documento, lugarresidencia, fechanacimiento, email, telefono, usuario, password);
    const query = `
      SET @id = ?;
      SET @nombres = ?;
      SET @apellidos = ?;
      SET @idtipodedocumento = ?;
      SET @documento = ?;
      SET @lugarresidencia = ?;
      SET @fechanacimiento = ?;
      SET @email = ?;
      SET @telefono = ?;
      SET @usuario = ?;
      SET @password = ?;
      CALL PersonaAddOrEdit(@nombre, @apellidos, @idtipodedocumento, @documento, @lugarresidencia, @fechanacimiento, @email, @telefono, @usuario, @password);
    `;
    mysqlConnection.query(query, [id, nombres, apellidos, idtipodocumento, documento, lugarresidencia, fechanacimiento, email, telefono, usuario, password], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Persona Saved'});
      } else {
        console.log(err);
      }
    });
});

module.exports = router;