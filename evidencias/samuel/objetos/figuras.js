//

var circunferencia = {
    radio : 25,
    pi : Math.PI,
    perimetro :()=>{
        
        per= (2 * circunferencia.pi * circunferencia.radio)
        return per } ,
    area :()=>{
        
        area = (circunferencia.pi *Math.pow(circunferencia.radio,2))
        return area 
    }
}

console.log(157.07963267948966==2)

var cuadrado = {
    lado : 10,
    perimetro :()=>{
        return per = cuadrado.lado * 4
    },
    area :()=>{
        return area = cuadrado.lado **2
    }
}

var triangulo = {
    base : 3,
    altura : 4,
    perimetro :()=>{
        return triangulo.base*3
    },
    area :()=> {
        return triangulo.base * triangulo.altura
    }
}



var rectangulo = {
    ladoa : 10,
    ladob : 20,
    perimetro :()=>{
        return per = (rectangulo.ladoa + rectangulo.ladob )* 2
    },
    area :()=>{
        return area = rectangulo.ladoa * rectangulo.ladob
    }
}
console.log(
circunferencia.area(),
cuadrado.area(),
triangulo.area(),
rectangulo.area(),
circunferencia.perimetro(),
cuadrado.perimetro(),
triangulo.perimetro(),
rectangulo.perimetro())

console.log(triangulo.radio) //)
function esunacircunferencia(objeto) {
    if (objeto.radio != undefined) {
        console.log(`es una circunferencia `)
    } else {
        console.log(`no es una circunferencia `)
    }
}
function recorrer(object) {
    for (const i in object) {

        console.log(object[i])
    }
}
function esunacircunferencia2(object) {
    cir = false 
    for (const i in object) {
        if (object[i]*Math.PI*2==object.perimetro()) {
            cir = true
        }
    }
    if (cir== true) {
        console.log(`si es una circunferencia`)
    } else {
        console.log(`no es una circunferencia`)
    }
}

recorrer(circunferencia)
esunacircunferencia(circunferencia)
esunacircunferencia2(circunferencia)
esunacircunferencia2(triangulo)
esunacircunferencia2(rectangulo)
esunacircunferencia2(cuadrado)

console.log(2==1)
console.log(circunferencia.pi)
