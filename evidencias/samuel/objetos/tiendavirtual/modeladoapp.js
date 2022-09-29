const Cliente = require('./cliente')
const Persona = require('./persona')
const Empresa = require('./empresa')
const Producto = require('./producto')
const Inventario = require('./inventario')
const Carrito = require('./carrito')
const Pedido = require('./pedido')
const Factura = require('./factura')
const Pqr = require('./pqr')



cliente1 = new Persona('Hugo','calle 23 3 norte','hugoar@gmail.com','3147892345','12345','Mendez',25,'111111111111')
cliente2 = new Persona('Paco','carrera 20 6-55','paquito@gmail.com','3203434232','34345324','perez',16,'22222222')
cliente3 = new Empresa('Cervesacolombia S A','administracion@.colombia.co','3254654544','3434343232')
console.log(cliente1,cliente2,cliente3)

cervesa1 = new Producto('Babaria','Colombia',2000,'lata','26/02/2024',0.19,2342323,'300 ','ml','lata','76349826')
cervesa2 = new Producto('Corona','Colombia',3100,'botella','31/08/2023',0.19,2324344,'500','ml','botella','19281298')
cervesa3 = new Producto('Poker','Colombia',2500,'lata','31/08/2023',0.19,2324344,'300','ml','lata','2323233')
cervesa4 = new Producto('Aguila','Colombia',2500,'lata','31/08/2023',0.19,2324344,'300','ml','botella','2323233')

inventario1 = new Inventario (cervesa1,4)
inventario2 = new Inventario (cervesa2,1)
inventario3 = new Inventario (cervesa3,3)
inventario4 = new Inventario (cervesa4,2)
console.log('---------------',inventario1,'------------------')

carritocliente = new Carrito(cliente1)
carritocliente.agregarproducto(cervesa1,inventario1)
carritocliente.agregarproducto(cervesa2,inventario2)
carritocliente.agregarproducto(cervesa2,inventario2)//aqui muestra que no puede agregarlo ya que solo habia 1 disponible 
carritocliente.agregarproducto(cervesa3,inventario3)
carritocliente.agregarproducto(cervesa4,inventario4)

carritocliente.mostrarlista
console.log('-------- AQUI SE AGREGARON TODOS LOS PRODUCTOS ----------------')

carritocliente.quitarproducto(cervesa1,inventario1)
carritocliente.mostrarlista
console.log('-------- AQUI QUITO EL PRIMER PRODUCTO ----------------')
console.log(carritocliente)

pedido1= new Pedido(carritocliente.confirmacion(),cliente1)//aqui se genera el pedido
console.log(pedido1)
pedido1.generarfactura()// aqui se genera la factura 
console.log(pedido1._factura)

comentarios = new Pqr(cervesa1)
comentarios.añadircomentario('me gusto mucho el producto lo comprare de nuevo ')
comentarios.añadircomentario('no llego el producto correctament tapado ')
console.log(comentarios)
comentarios.mostrarcomentarios()

module.exports = Cliente

console.log('**************************Ejercicios Funciones***********************')

//Escribir una funcion que reciba el carrito de compras y registrar el precio de la compra dependiendo de la cantidad de productos

function precio (carrito){
    total=0
    for (let i = 0; i < carrito.productos.length; i++) {
        total+=carrito.productos[i]._precio
        
    }
    return total
}
preciocarrito=precio(carritocliente)
console.log(preciocarrito)

//Funcion que otorgue un descuento a la cateoria, calcular el precio de descuento
//totalprecio=0

function preciocondescuento (categoria,descuento,carrito) {
    total=0
    for (let i = 0; i < carrito.productos.length; i++) {
        if (carrito.productos[i]._categoria==categoria) {
            total+=((carrito.productos[i]._precio)-(carrito.productos[i]._precio*descuento))
        } else {
            total+=carrito.productos[i]._precio
        }
    }
    return total
}
console.log(preciocondescuento('lata',0.20,carritocliente))
console.log(preciocondescuento('botella',0.20,carritocliente))
//Funcion que permita saber si la plata alcanza para lo que requiere comprar. Calcular el precio de la compra y decir si alcanza o sobra y decir cuanto carrito cantidad que quiere

function mealcanza(presupuesto,precio) {
    if (presupuesto >=precio) {
        console.log(`me alcanza para la compra y me sobra ${presupuesto-precio}`)
    } else {
        console.log(`no me alcanza para la compra y falta ${precio-presupuesto}`)
    }
}

mealcanza(5000,preciocarrito)
mealcanza(10000,preciocarrito)
//asincronismo

