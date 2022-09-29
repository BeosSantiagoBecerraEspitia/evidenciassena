class Cliente {
    #nombre;
    #director;
    #correo;
    #telefono;
    #id_cuenta;

    constructor(nombre, direccion, correo, telefono, id_cuenta) {
        this.#nombre = nombre;
        this.#direccion = direccion;
        this.#correo = correo;
        this.#telefono = telefono;
        this.#id_cuenta=id_cuenta;
    }
}

module.exports = Cliente;