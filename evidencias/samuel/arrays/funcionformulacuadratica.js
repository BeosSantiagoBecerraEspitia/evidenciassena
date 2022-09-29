var x = Math.floor(Math.random()*100)
var y = Math.floor(Math.random()*100)
var z = Math.floor(Math.random()*100)


function formulacuadratica(a,b,c) {
    
    discriminante = (Math.pow(b,2))-(4*a*c)
    
    funcionp=-b+(Math.abs(discriminante))/2*a
    funcionn=-b-(Math.abs(discriminante))/2*a

    if (discriminante<0) {
        funcionp= funcionp+'i'
        funcionn = funcionn +'i'
    }
    soluciones=[funcionp,funcionn]
    return soluciones
}


solucion = formulacuadratica(x,y,z)

console.log(`siendo a =${x} b = ${y}c = ${z} x tiene dos posibles soluciones que son ${solucion}`)