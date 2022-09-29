let vector = [];
let tam = Math.round((Math.random*20-10)+10);
console.log(`valor de la variable tam ${tam}`)
for (let i = 0; i < tam; i++) {
    vector[i]=Math.round(Math.random() *100)
    
}
console.log(vector)
console.log(`tamaño del vector ${vector.length}`)
for (let i = 0; i <vector.length; i++) {
    if (vector[i]%2==0) {
        console.log(`es par `)
    } else {
        console.log(`es impar `)
    }
}


let cuadrados=[];
for (let i = 0; i < 20; i++) {
    cuadrados[i]=Math.pow([i],2)
    
}

let raiz=[];
for (let i = 0; i < 20; i++) {
    cuadrados[i]=Math.sqrt([i])
    
}

