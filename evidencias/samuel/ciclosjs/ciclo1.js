numero = Math.floor(Math.random()*100)

for (let a = 0; a <= numero; a++) {
    if (numero%a==0) {
        console.log(a ,'es divisor de',numero)
    }
}