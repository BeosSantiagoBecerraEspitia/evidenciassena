const Producto = require('./Producto');
class Carrito {
    constructor(listaProd) {
        this._listaProd = listaProd
    }
    agregarProd(nuevoproducto) {
        this._producto.push(nuevoproducto);

    }
    vaciarProd(nuevoproducto) {
        this._producto.pop(nuevoproducto)
    }
    confirmacion() {
        return True
    }
    getlistaProd(listaProd){
        this._listaProd=listaProd
    }
    generarPedido(){
        this._listaProd.push(new Producto('0','0','0','0','0','0','0','0','0'))
    }
}


module.exports = Carrito;