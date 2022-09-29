var celcius = Math.floor(Math.random()*100)

function kelvin(C) {
    C + 273.15
}

function fahrenheit(C) {
    (C * 9/5) + 32
}

function rankine(C) {
    C * 9/5 + 491.67
}

console.log(rankine(celcius))
console.log(kelvin(celcius))
console.log(fahrenheit(celcius))