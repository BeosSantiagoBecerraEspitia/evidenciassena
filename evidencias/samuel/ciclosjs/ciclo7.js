numero = Math.floor(Math.random()*100)
suma=0
console.log(`para superar el numero ${numero}se debe sumar`)
n = 0 
while (suma<numero) {
    n++
    suma+=n
    console.log(n)
}
console.log(`el total seria  ${suma}`)