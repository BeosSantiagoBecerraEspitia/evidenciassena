//MISION: Escriba métodos para suma, promedio, mayor, menor. 
//Escriba una clase que represente un producto comercial de cualquier área. Debe tener 
//constructor, setters, getters y un método para calcular el valor despues de IVA

class Mate {
    constructor (n1,n2,n3) {
        this._n1=n1
        this._n2=n2
        this._n3=n3
    }
    suma(){
        return this._n1+this._n2+this._n3
    }

    promedio(){
        return (this._n1+this._n2+this._n3)/3
    }

    menor(){
        return Math.min(this._n1,this._n2,this._n3)
    }

    maximo (){
        return Math.max(this._n1,this._n2,this._n3)
    }
}


objeto_prueba = new Mate(2,4,6)

console.log(objeto_prueba)
console.log(objeto_prueba.suma())
console.log(objeto_prueba.promedio())
console.log(objeto_prueba.menor())
console.log(objeto_prueba.maximo())


class matearreglos {
    constructor (arreglo) {
        this._arreglo = arreglo
    }
    suma(){
        this._suma=0
        for (let i = 0; i < this._arreglo.length; i++) {
            this._suma+=this._arreglo[i]
        }
    }
    promedio(){ 
            this._promedio=this._suma/this._arreglo.length
    }
    maximo(){
        this.max=this._arreglo[0]
        for (let i = 0; i < this._arreglo.length; i++) {
            
            if (this.max<this._arreglo[i]) {
                this.max=this._arreglo[i]
            }
        }
    }
    minimo(){
        this.min=this._arreglo[0]
        for (let i = 0; i < this._arreglo.length; i++) {
            
            if (this.min>this._arreglo[i]) {
                this.min=this._arreglo[i]
            }
        }
    }
}

a = []
for (let i = 0; i < 10; i++) {
    a[i]=Math.floor(Math.random()*20)
    
}
f = new matearreglos(a)
console.log(f)
f.suma()
console.log(f._suma)
f.promedio()
console.log(f._promedio)
f.maximo()
console.log(f.max)
f.minimo()
console.log(f.min)

class producto  {
    constructor (nombre,gramos) {
        this._nombre = nombre
        this._gramos = gramos
    }
    precioneto(precio){
        this._precio = precio
    }
    get precio (){
        return this._precio
    }
    get gramos (){
        return this._gramos
    }
    precioiva (iva){
        this.precioiva=this.precio*(1+(iva/100))
    }

    precio_gramo(){
        this.precio_gramo=this._precio/this._gramos
        return this._precio/this._gramos
    }
}

arroz = new producto('arroz',500)

arroz.precioneto(20000)
arroz.precioiva(19)
arroz.precio_gramo()
console.log(arroz)
console.log(arroz.precio)