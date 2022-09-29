var persona ={
    nombre : 'pancho perez',
    id : 928334,
    datoscompletos: ()=> console.log(`persona es ${persona.nombre} , id = ${persona.id}`)
}

console.log(persona)
console.log(persona.nombre)
console.log(persona.datoscompletos)
console.log(persona['id'])

persona.datoscompletos()