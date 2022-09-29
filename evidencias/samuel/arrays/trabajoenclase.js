arreglo = []
for (let i = 0; i <6; i++) {
    
    arreglo[i] =Math.floor(Math.random() * 20) 
}

console.log(arreglo)
var moda = [0,0]
var media = 0 
var mediana = 0
var suma = 0
var desviacion = 0
var sumatoria = 0
for (let i = 0; i < arreglo.length; i++) {
    suma = suma + arreglo[i]
    
}

media = suma / arreglo.length

console.log(media)

for (let e = 0; e < arreglo.length; e++) {
    sumatoria = sumatoria +(Math.pow(arreglo[e],2))
}

console.log(sumatoria)

desviacion = Math.sqrt((sumatoria / arreglo.length)-Math.pow(media,2))

console.log(desviacion)


//------------------------------------------------------------------------------------------------------------------------------------------------------------------

for (let i = 0; i < arreglo.length; i++) {
    repeticiones = 0
    for (let j = 0; j < arreglo.length; j++) {
        if (arreglo[i]==arreglo[j]) {
            repeticiones++;
        } 
    }
    if (repeticiones > moda[1]) {
        moda[0]=arreglo[i]
        moda[1]=repeticiones
    }
}

console.log(`el numero que mas se repite es ${moda[0]} esta rerpetido ${moda[1]} veces `)
arregloordenado = arreglo 
for (let i = 0; i < arregloordenado.length-1; i++) {
    for (let e = 0; e < arregloordenado.length-1-(i); e++) {
        momentaneo = arregloordenado[e]
        if (arregloordenado[e]>arregloordenado[e+1]) {
            arregloordenado[e]=arregloordenado[e+1]
            arregloordenado[e+1]=momentaneo
        }
    }
}
console.log(arregloordenado)
if (arregloordenado.length%2==0) {
    mediana=(arregloordenado[(Math.floor(arregloordenado.length/2))-1]+arregloordenado[(Math.floor(arregloordenado.length/2))])/2
} else {
    mediana=(arregloordenado[Math.floor(arregloordenado.length/2)])
}

console.log(mediana)