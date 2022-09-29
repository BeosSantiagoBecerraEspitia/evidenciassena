class Proveedor {
    constructor(direccion, cant_prod, nombre, nombre_prod) {
        this._direccion = direccion;
        this._cant_prod = cant_prod;
        this._nombre = nombre;
        this._nombre_prod;
    }
    agregarproducto(producto){
        this._producto.push(producto);
    }
}

module.exports = Proveedor;