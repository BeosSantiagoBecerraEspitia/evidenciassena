
arreglo1 = []
arreglo2 = []
arreglo3 = []
var arreglogrande
for (let i = 0; i < Math.floor((Math.random() * 15)+5) ; i++) {
    
    arreglo1[i] =Math.floor(Math.random() * 100) 
    
}
for (let i = 0; i < Math.floor((Math.random() * 15)+5) ; i++) {
    
    arreglo2[i] =Math.floor(Math.random() * 100) 
}
for (let i = 0; i < Math.floor((Math.random() * 15)+5) ; i++) {
    
    arreglo3[i] =Math.floor(Math.random() * 100) 
}

console.log(arreglo1, arreglo2, arreglo3)


if (arreglo1.length > arreglo2.length && arreglo1.length >arreglo3.length) {
    console.log(`el arreglo mas grande es arreglo1`)
    arreglogrande=arreglo1
} else {
    if (arreglo2.length > arreglo1.length && arreglo2.length >arreglo3.length) {
        console.log(`el arreglo mas grande es arreglo2`)
        arreglogrande=arreglo2
    } else {
        if (arreglo3.length > arreglo2.length && arreglo3.length >arreglo1.length) {
            console.log(`el arreglo mas grande es arreglo3`)
            arreglogrande=arreglo3
        }
    }
}
 
function pareseimpares(a){
    paresimpares= [0,0]
    ceros = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i]%2==0) {
            paresimpares[0]++
        }
        else{paresimpares[1]++}
    }
    

    return paresimpares
}

console.log(`el numero de pares del arreglo 1 es${pareseimpares(arreglo1)[0]} y de impares ${pareseimpares(arreglo1)[1]}`)
console.log(`el numero de pares del arreglo 2 es${pareseimpares(arreglo2)[0]} y de impares ${pareseimpares(arreglo2)[1]}`)
console.log(`el numero de pares del arreglo 3 es${pareseimpares(arreglo3)[0]} y de impares ${pareseimpares(arreglo3)[1]}`)


function llenar(a){
    for (let i = a.length; i < arreglogrande.length ; i++) {
    
        a[i]=arreglogrande[i]
        
    }
    return a
}

console.log("los nuevos arreglos quedan asi ;")
console.log(llenar(arreglo1))
console.log(llenar(arreglo2))
console.log(llenar(arreglo3))
