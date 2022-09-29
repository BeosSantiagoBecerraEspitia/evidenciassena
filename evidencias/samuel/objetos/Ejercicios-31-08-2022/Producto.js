class Producto {
    #nombre;
    constructor(nombre,determinacionorigen,preciolata,preciobotella,añovenc,iva,nit,capacidad,tipounidad,categoria){
        this.#nombre = nombre;
        this._determinacionorigen = determinacionorigen;
        this._preciolata = preciolata;
        this._preciobotella = preciobotella;
        this._añovenc = añovenc;
        this._iva =iva;
        this._nit =nit;
        this._capacidad = capacidad;
        this._tipounidad = tipounidad;
        this._categoria = categoria;
    }
}

prod= new Producto ('0','0','0','0','0','0','0','0','0','0')
console.log(prod)
module.exports = Producto;