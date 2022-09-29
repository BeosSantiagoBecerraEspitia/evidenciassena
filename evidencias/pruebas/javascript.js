//ejercicio 2
function todas(cb1,cb2,cadena){
  return new Promise((resolve,reject)=>{
    
    cb1(cadena)
    cb2(cadena)
    console.log('La cantidad de MAYUSCULAS ES : ' + cb1(cadena));
    console.log('La cantidad de minusculas es:  ' + cb2(cadena));
    resolve()
  })
}
todas()

let contar =0
function contarMayusculas(){
    let contar = 0;
    let mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < mayusculas.length; i++) {
        for (var x = 0; x < cadena.length; x++) {
            if (cadena[x] == mayusculas[i]) {
                contar += 1;
            }
        }
    }
    return contar;
}
function contarminusculas(){  
    let contar = 0; 
    let minusculas = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < minusculas.length; i++) {
        for (let x = 0; x < cadena.length; x++) {
            if (cadena[x] == minusculas[i]) {
                contar += 1;
            }
        }
    }
    return contar;
}
todas(contarMayusculas, contarminusculas,'HOLA tu').then(contarMayusculas)
.then(contarminusculas)
.catch(error=>console.log('se activa un error de haberlo'))