const Cliente = require('./Cliente');
class Persona extends Cliente {
    #nro_doc;
    #apellidos;
    #edad;
    constructor(nombre, direccion, correo, telefono, nro_doc, apellido,edad) {
        super(nombre, direccion, correo, telefono);
        this.#nro_doc = nro_doc;
        this.#apellido = apellido;
        this.#edad=edad
    }

    validacionEdad(edad) {
        if (edad < 18) {
            return `No se puede ingresar`
        }else{
            return `Ingreso permitido`
        }
    }
}

module.exports = Persona;