numero = Math.floor(Math.random()*1000)
total = 0

for (let a = 0; a<numero; a++) {
    if (numero %a==0) {
        total=total+a 
        console.log(a)
    }
}

if (total == numero) {
    console.log(`el numero ${numero} es perfecto `)
}else{console.log(`el numero ${numero} no es perfecto `)}

console.log(total)