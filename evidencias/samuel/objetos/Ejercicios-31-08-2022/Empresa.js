const Cliente = require('./Cliente');
class Empresa extends Cliente {
    #rut;
    constructor(nombre, direccion, correo, telefono, id_cuenta, rut) {
        super(nombre, direccion, correo, telefono, id_cuenta)
        this._rut = rut;
    }
}

module.exports = Empresa;