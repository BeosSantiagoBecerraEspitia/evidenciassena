//1. Pedir 3 numeros e indicar cual de ellos es el valor del medio. Ej 11, 2 1000, el
//valor del medio es 11. No use operadores lógicos
var a = Math.trunc(Math.random() * 100);
console.log(a)
var b = Math.trunc(Math.random() * 100);
console.log(b)
var c = Math.trunc(Math.random() * 100);
console.log(c)
var n = Math.trunc(Math.random() *(365-1)+1);

function valormedio (a,b,c) {
    
if (a > b) { 
    if(c > a){
      console.log(`El valor del medio es ${a}`)
    }else if(c > b){
        console.log(`El valor del medio es ${c}`)
      }else if(b > a){
        if(c > b){
          console.log(`El valor del medio es ${b}`)
        }
      }else if(b > c){
        console.log(`El valor del medio es ${b}`)
      }
  }else if(b > a){          
    if(c > b){
      console.log(`El valor del medio es ${b}`)
    }else if(c > a){
      if(b > c){
      console.log(`El valor del medio es ${c}`)
      }
    }else if(b > a){
      console.log(`El valor del medio es ${a}`)
    }
  }
}

valormedio(a,b,c)

//2. Escribe un programa que pida tres numeros y que reciba si son los tres iguales, si hay dos iguales o si son los tres distintos

function distintos (a,b,c) {
    if (a == b) {
        console.log(`Hay dos numeros iguales: ${a} ${b}`);
      if (a == c)
          console.log(`Hay dos numeros iguales: ${a} ${c}`);
      if (b == c)
          console.log(`Los tres son iguales: ${a} ${b} ${c}`);
      } else if (a == c) {
        console.log(`Hay dos numeros iguales: ${a} ${c}`);
      } else if (b == c) {
        console.log(`Hay dos numeros iguales: ${c} ${b}`);
      } else {
        console.log(`Los tres son distintos ${a} ${b} ${c}`);  
      }
}
distintos(a,b,c)
// cifras

function cifra (a) {
    
cifras = 0 
n = a
while (a>1) {
  cifras++
  a=a/10
}

console.log(`el numero ${n} tiene ${cifras} cifras`)
}
cifra(a)
cifra(n)

//6. Pida un numero al usuario que representa dias del año. Diga a que mes del año corresponde así. Si el numero es menor o igual a 31 indica que esta en enero, pero si el numero por ejemplo es 32 indica que es el 1 de febrero. No tenga en cuenta si el año es bisiesto, es decir siempre febrero tiene 28 dias.

function diadelaño (n) {
    var month = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE']; 
console.log(n)
if (n<= 31){                        
  console.log(`El numero ingresado muestra el mes de `+month[0]+` dia ${n}`)
}else if (n<59){
  console.log(`El numero ingresado muestra el mes de `+month[1]+` dia ${n}`)
}else if (n<90){
  console.log(`El numero ingresado muestra el mes de `+month[2]+` dia ${n}`)
}else if (n<120){
  console.log(`El numero ingresado muestra el mes de `+month[3]+` dia ${n}`)
}else if (n<151){
  console.log(`El numero ingresado muestra el mes de `+month[4]+` dia ${n}`)
}else if (n<181){
  console.log(`El numero ingresado muestra el mes de `+month[5]+` dia ${n}`)
}else if (n<212){
  console.log(`El numero ingresado muestra el mes de `+month[6]+` dia ${n}`)
}else if (n<243){
  console.log(`El numero ingresado muestra el mes de `+month[7]+` dia ${n}`)
}else if (n<270){
  console.log(`El numero ingresado muestra el mes de `+month[8]+` dia ${n}`)
}else if (n<304){
  console.log(`El numero ingresado muestra el mes de `+month[9]+` dia ${n}`)
}else if (n<334){
  console.log(`El numero ingresado muestra el mes de `+month[10]+` dia ${n}`)
}else if (n<=365){
  console.log(`El numero ingresado muestra el mes de `+month[11]+` dia ${n}`)
}else{
  console.log('Numero no valido')
}
}
diadelaño(n)

//7. Un obrero necesita calcular su salario semanal, el cual se obtiene de la sig.manera:Si trabaja 40 horas o menos se le paga $2600 por hora. Si trabaja más de 40 horas se le paga $2600 por cada una de las primeras 40 horas y $5000 por cada hora extra

function salario(h) {
    
if(h<0){
    console.log('El valor no es valido')
  }else if(h<=40){
    hx = h*2600
    console.log(`Su salario es de ${hx}`)
  }else{
    ha = (h-40)*5000
    hb = 40*2600
    hy = ha + hb
    console.log(`Su salario es de ${hy}`)
  }
  
}
salario(n)
//13. Solicite al usuario una cantidad numérica que expresa segundos (medida de tiempo). Exprésela (conviértala) en horas minutos y segundos. Según el caso

function minutosysegundos (n) {
    
if(n>=0){ 
    ss = n%60
    console.log(ss)
    mm1 = Math.trunc(n/60)
    console.log(mm1)
    mm = mm1%60
    console.log(mm)
    hh = Math.trunc(mm1/60)
    console.log(hh)
    console.log(`${hh} : ${mm} : ${ss}`)
    }else{
      console.log(`El numero no puede representar una medida de tiempo`)
    }
}
minutosysegundos(n)
//14. Solicite un Angulo al usuario en grados. Diga en que cuadrante está. Diga además en que vuelta está sabiendo que cada 360 grados se completa una vuelta a la circunferencia. Además diga el resultado en radianes.

function angulo (n) {
    var vuelta = 360

posicion = Math.trunc(n/vuelta)
angulo = n-(vuelta*posicion)

if(angulo>0 && angulo<=90){
  cuadrante = `Esta en el cuadrante 1` 
}else if(angulo>90 && angulo<=180){
  cuadrante = `Esta en el cuadrante 2` 
}else if(angulo>180 && angulo<=270){
  cuadrante = `Esta en el cuadrante 3` 
}else if(angulo>270 && angulo<=360){
  cuadrante = `Esta en el cuadrante 4` 
}else{
  cuadrante = `No pertene a ningun cuadrante`
}
pi = 3.1416
radaprox = Math.round((n*pi)/180)
rad = (n*pi)/180
if(posicion>1){
  an= `Vueltas`
}else{
  an= `Vuelta` 
}
console.log(`El Angulo ${n}° ${cuadrante} y a dado ${posicion} ${an}.El angulo ${n}°   Equivale a  ${rad} rad  que es aproximadamente ${radaprox} rad `)
}

angulo(a)