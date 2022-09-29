numero = 0
maximo = 0 
while (numero>=0) {
    numero = Math.floor((Math.random()*100)-50)
    console.log(numero)
    if (numero>maximo) {
        maximo=numero
    }
}
console.log(`el numero mayor es ${maximo}`)