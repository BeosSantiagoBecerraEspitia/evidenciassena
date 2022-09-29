 let arregloprueba = [];
 for (let i = 0; i < 20; i++) {
    arregloprueba[i]=Math.floor(Math.random()*100)
    
 }
console.log(arregloprueba)

//1- Sumar todos los elementos de un arreglo 
var suma = 0
for (let i = 0; i < arregloprueba.length; i++) {
    suma = suma + arregloprueba[i]
    
}
console.log(suma)

//2- Promediar los elementos de un arreglo
var suma = 0
for (let i = 0; i < arregloprueba.length; i++) {
    suma = suma + arregloprueba[i]
    
}
promedio = suma / arregloprueba.length

console.log(promedio)

//3- Obtener el numero mayor de los elementos de un arreglo
mayor = 0
for (let i = 0; i < arregloprueba.length; i++) {
    if (mayor<arregloprueba[i]) {
        mayor = arregloprueba[i]
    }
    
}

console.log(mayor)

//4- Obtener el numero menor de los elementos de un arreglo 
menor = arregloprueba[0]
for (let i = 0; i < arregloprueba.length; i++) {
    if (menor>arregloprueba[i]) {
        menor = arregloprueba[i]
    }
    
}

console.log(mayor)

//6- Buscar un elemento dentro de un arreglo
arreglobusqueda = []
/*
for (let i = 0; i < 99; i++) {
    arreglobusqueda[i]=i+1
    
}*/

for (let i = 0; i < 1000; i++) {
    
    arreglobusqueda[i]=Math.floor(Math.random()*100)
}
posicion=[]
buscado = Math.floor(Math.random()*100)
posicion[0]="ninguna posicion"
cantidad=0 // esto es por si esta repetido 
for (let a = 0; a < arreglobusqueda.length; a++) {
    
    if (arreglobusqueda[a]==buscado) {
        
        posicion[cantidad]=a
        cantidad++
    }
    
}
console.log(arreglobusqueda)
console.log(`el numero ${buscado}esta en ${posicion}`)


//7- ordenar un arreglo de menor a mayor (algoritmo de la burbuja)

for (let i = 0; i < (arregloprueba.length-1); i++) {
    for (let e = 0; e < arregloprueba.length-1-(i); e++) {
        momentaneo = arregloprueba[e]
        if (arregloprueba[e]>arregloprueba[e+1]) {
            arregloprueba[e] = arregloprueba[e+1]
            arregloprueba[e+1]= momentaneo
        }
        
    }
    
}
//8- ordenar un arreglo de mayor a menor (algoritmo de la burbuja),

for (let i = 0; i < (arregloprueba.length-1); i++) {
    for (let e = 0; e < arregloprueba.length-1-(i); e++) {
        momentaneo = arregloprueba[e]
        if (arregloprueba[e]<arregloprueba[e+1]) {
            arregloprueba[e] = arregloprueba[e+1]
            arregloprueba[e+1]= momentaneo
        }
        
    }
    
}