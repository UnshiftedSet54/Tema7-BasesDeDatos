const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Movil = require('../models/movil')

mongoose.connect('mongodb://localhost:27017/moviles')
.then(() => console.log('Conectado a la base de datos.'))
.catch(error => console.log(error))

app.get('/', (req, res) => {
  Movil.find({})
  .then(data => res.status(200).json({msg: 'ok', data}))
  .catch(error => res.status(500).json({msg: 'Error en base de datos.'}))
})

app.post('/', (req, res) => {
  //console.log({...req.body})
  const nuevoMovil = new Movil({...req.body})
  nuevoMovil.save()
  .then(data => res.status(200).json({msg: 'ok', respuesta: data}))
  .catch(() => res.status(500).json({msg: 'Error en base de datos.'}))
})

app.put('/', (req, res) => {
  Movil.findByIdAndUpdate(req.body._id, {$set: req.body.data}, {returnDocument: 'after'})
  .then(data => res.status(200).json({msg: 'ok', response: data}))
  .catch(error => res.status(500).json({msg: 'Error en base de datos.'}))
})

app.delete('/', (req, res) => {
  Movil.findByIdAndDelete(req.body._id)
  .then(data => res.status(200).json({msg: 'ok', response: data}))
  .catch(error => res.status(500).json({msg: 'Error en base de datos.'}))
})

module.exports = app

