n = Math.floor(Math.random()*100)

// calcular divisores de un numero 
function divisores(numero) {
    for (let a = 0; a <= numero; a++) {
        if (numero%a==0) {
            console.log(a ,'es divisor de',numero)
        }
    }
    
}
divisores(n)

//decir si un numero es primo o no 

function primo(numero) {
    for (let a = 0; a <= numero; a++) {
        if (numero%a==0) {
            divisores++
        }
    }
    if (divisores == 2) {
        console.log(`el numero ${numero} es primo `)
    }else{console.log(`el numero ${numero} no es primo `)}

}
primo(n)
//Determinar si un número es o no es perfecto
function perfecto (numero) {
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

}
perfecto(n)

// Encontrar un número natural n más pequeño tal que la suma de los n primeros números naturales (1 + 2 + 3 + 4…..) exceda de una cantidad (máximo) introducida por el teclado. Es decir cuantos números de la serie de los naturales debo sumar para superar el dato máximo.

function npequeño (numero) {
    suma=0
console.log(`Para superar el numero ${numero} se debe sumar`)
n = 0 
while (suma<numero) {
    n++
    suma+=n
    console.log(n)
}
console.log(`El total seria  ${suma}`)
}
npequeño(n)

// determinar numeros multiplos entre 1 y n

function multiplosde5 (numero) {
    for (let a = 1; a < numero; a++) {
        if (a % 5 == 0) {
            console.log(a, "es multiplo de 5")
        }
    }
}

multiplosde5(n)

console.log(n,'es el numero')