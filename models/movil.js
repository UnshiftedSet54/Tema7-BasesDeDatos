const mongoose = require('mongoose')

const MovilSchema = new mongoose.Schema(
  {
    serial: {type: String, required: true},
    fabricante: {type: String, required: true},
    modelo: {type: String, required: true},
    idPropietario: {type: String, required: true},
    nombrePropietario: {type: String, required: true},
    fechaCompra: String,
    dimensiones: String,
    pantalla: String,
    camaraFrontal: String,
    camaraTrasera: String,
    cpu: String,
    bateria: String,
    ram: String,
    almacenamiento: String,
    conectividad: String
  },
  {
    versionKey: false,
    collection: 'movil'
  }
)

module.exports = mongoose.model('Movil', MovilSchema)