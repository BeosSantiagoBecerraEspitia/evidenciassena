//1. Pedir 3 numeros e indicar cual de ellos es el valor del medio. Ej 11, 2 1000, el
//valor del medio es 11. No use operadores lógicos
/*var a = Math.trunc(Math.random() * 100);
console.log(a)
var b = Math.trunc(Math.random() * 100);
console.log(b)
var c = Math.trunc(Math.random() * 100);
console.log(c)

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
}*/
       
  
//2. Escribe un programa que pida tres numeros y que reciba si son los tres iguales, si hay dos iguales o si son los tres distintos

/*var a = Math.trunc(Math.random() * 100);
var b = Math.trunc(Math.random() * 100);
var c = Math.trunc(Math.random() * 100);

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
} */

//3. Pedir un numero entre 0 y 9.999 y decir cuantas cifras tiene. Cuando el numero exceda los limites emita un mensaje y finalice el programa.

/*var a = Math.trunc(Math.random() * 9999);
if (a < 10) {
  console.log(`Tiene una cifra ${a}`);
} else if (a < 100) {
  console.log(`Tiene dos cifras ${a}`);
} else if (a < 1000) {
  console.log(`Tiene tres cifras ${a}`);
} else if (a < 10000) {
  console.log(`Tiene cuatro cifras ${a}`);
} else {
  console.log(`El numero excede los limites ${a}`);
}*/

//4. Pedir una nota de 0 a 10 y mostrarla de forma:Insuficiente, Suciente, Bien, etc. Use la escala que prefiera, pero cerciórese que tiene 5 valores.

/*var n = Math.trunc(Math.random() *(10-1)+1);
switch (n) {
    case 10:
    case 9:
        calificacion = "SUPERIOR";
        break;
    case 8:
    case 7:
        calificacion: "BIEN";
        break;
    case 6:
    case 5:
        calificacion = "SUFICIENTE";
        break;
    case 4:
    case 3:
        calificacion = "INSUFICIENTE";
        break;
    case 2:
    case 1:
    case 0:  
        calificacion = "BAJA"
        break;
    default:
        calificacion = "NOTA ERRÓNEA"
        break;
}
console.log(`Nota ingresada ${n}`)
console.log(`Ha optenido una calificación ${calificacion}`)*/

//5. En un juego de preguntas a las que se responde "Sí" o "No" gana quien responda correctamente las tres preguntas. Si se responde mal a cualquiera de ellas ya no se pregunta la siguiente y termina el juego. Las preguntas son:
//1. Colon descubrio America?
//2. La independencia de Colombia fue en el año 1810?
//3. The Doors fue un grupo de rock Americano?
/*console.log('¿Colón descubrio América?')
var a = 'Si'
console.log(a)

if (a =='Si'){
  console.log('¿La independencia de Colombia fue en el año 1810?')
  var b = 'Si'
  console.log(b)

  if (b =='Si'){
    console.log('¿The Doors fue un grupo de rock Americano?')
    var c = 'Si'
    console.log(c)
    if (c =='Si'){
      console.log('Has contestado asertivamente todas las preguntas. ¡Gracias por jugar!')
    }else{
      console.log('El juego a terminado. ¡Gracias por participar!')
    }
  }else{
    console.log('El juego a terminado. ¡Gracias por participar!')
  }
}else{
  console.log('El juego a terminado. ¡Gracias por participar!')
}*/

//6. Pida un numero al usuario que representa dias del año. Diga a que mes del año corresponde así. Si el numero es menor o igual a 31 indica que esta en enero, pero si el numero por ejemplo es 32 indica que es el 1 de febrero. No tenga en cuenta si el año es bisiesto, es decir siempre febrero tiene 28 dias.
/*var n = Math.trunc(Math.random() *(365-1)+1);
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
}*/

//7. Un obrero necesita calcular su salario semanal, el cual se obtiene de la sig.manera:Si trabaja 40 horas o menos se le paga $2600 por hora. Si trabaja más de 40 horas se le paga $2600 por cada una de las primeras 40 horas y $5000 por cada hora extra

/*var h = 50

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
}*/

//8. Telefónica realiza los cálculos del costo de una llamada de teléfono siguiendo los cálculos así: Cuando se descuelga el teléfono los primeros 3 minutos (banderazo) cuestan 200 pesos y cada minuto adicional cuesta 50 pesos. Escriba un programa que permita calcular el costo de una llamada dados los minutos de duración.

/*var t = 40
if(t<0){
  console.log('El valor no es valido')
}else if(t<=3){
  tx = t*200
  console.log(`El costo de la llamada es de:  ${tx}`)
}else{
  ta = (t-3)*50
  tb = 200
  ty = ta + tb
  console.log(`El costo de la llamada es de: ${ty}`)
}*/

//9. Solicite una fecha al usuario. en formato día, mes y año. Dígale cuanto tiempo ha pasado desde esa fecha hasta hoy o cuanto falta para llegar a esa fecha si es posterior

/*var dd = 01
var mm = 04
var aa = 2020

dd1 = (dd-04)
mm1 = (mm-08)
aa1 = (aa-2022)

if (aa < 2022) {
  aa1 = aa1 * -1
  console.log(`Han pasado ${aa1} años ${mm1} meses ${dd1} dias`)
} else if (mm < 08) {
  mm1 = mm1 * -1
  console.log(`Han pasado ${aa1} años ${mm1} meses ${dd1} dias`)
} else if (dd < 04) {
  dd1 = dd1 * -1
  console.log(`Han pasado ${aa1} años ${mm1} meses ${dd1} dias`)
} else if (dd == 04) {
  if (mm == 08) {
    if (aa == 2022) {
      console.log(`Se encuentra en la fecha ingresada`)
    }
  } else {
    console.log(`Hacen falta ${aa1} años ${mm1} meses ${dd1} dias `)
  }
} else {
  console.log(`Hacen falta ${aa1} años ${mm1} meses ${dd1} dias `)
}*/

//10. Solicite al usuario la hora en formato hh:mm:ss (hora militar, 24 horas). El programa debe responder que hora será un segundo después. Ej: ingreso 11:59:59, el programa responde 12:00:00. 
  
/*var hh = 00
var mm = 00
var ss = 00

ss = ss+1

if(mm>59){
  mm = 0
}
if(hh>23){
  hh = 0
}
if(ss>59){
  ss = 0
  mm = mm+1
  if(mm>59){
    mm = 0
    hh = hh+1
    if(hh>23){
     hh = 0 
    }
  }
}console.log(`${hh} : ${mm} : ${ss}`)*/

//11. Escribir un algoritmo que pida un valor entero que equivale a una cantidad de DINERO y calcule a cuantos billetes de 50.000, 20.000, 10.000, 5.000, 2.000, y 1.000 equivalen. Si el usuario digita 282000 el programa debe responder cinco billetes de 50.000, un billete de veinte mil, un billete de diez mil, un billete de dos mil.

/*var n = 282000

if (n >= 50000) {
  a = Math.trunc(n / 50000)
  n = n - (a * 50000)
} else {
  a = 0
} if (n >= 20000) {
  b = Math.trunc(n / 20000)
  n = n - (b * 20000)
} else {
  b = 0
} if (n >= 10000) {
  c = Math.trunc(n / 10000)
  n = n - (c * 10000)
} else {
  c = 0
} if (n >= 5000) {
  d = Math.trunc(n / 5000)
  n = n - (d * 5000)
} else {
  d = 0
} if (n >= 2000) {
  e = Math.trunc(n / 2000)
  n = n - (e * 2000)
} else {
  e = 0
} if (n >= 1000) {
  f = Math.trunc(n / 1000)
  n = n - (f * 1000)
} else {
  f = 0
}
console.log(`Billetes de 50000 ${a}, Billetes de 20000 ${b}, Billetes de 10000 ${c}, Billetes de 5000 ${d}, Billetes de 2000 ${e}, Billetes de 1000 ${f}`)*/

//12. Solicite la hora en formato horas, minutos y segundos. Imprima en pantalla la hora que será dentro de 1 segundo
/*var hh = 00
var mm = 00
var ss = 00

ss = ss+1

if(mm>59){
  mm = 0
}
if(hh>23){
  hh = 0
}
if(ss>59){
  ss = 0
  mm = mm+1
  if(mm>59){
    mm = 0
    hh = hh+1
    if(hh>23){
     hh = 0 
    }
  }
}console.log(`${hh} : ${mm} : ${ss}`)*/

//13. Solicite al usuario una cantidad numérica que expresa segundos (medida de tiempo). Exprésela (conviértala) en horas minutos y segundos. Según el caso

/*var n = 12500

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
}*/

//14. Solicite un Angulo al usuario en grados. Diga en que cuadrante está. Diga además en que vuelta está sabiendo que cada 360 grados se completa una vuelta a la circunferencia. Además diga el resultado en radianes.

/*var n = 270
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
console.log(`El Angulo ${n}° ${cuadrante} y a dado ${posicion} ${an}.El angulo ${n}°   Equivale a  ${rad} rad  que es aproximadamente ${radaprox} rad `)*/

//15. La fecha de Pascua corresponde al primer domingo después de la primera luna llena que sigue al equinoccio de primavera, y se calcula con las siguientes expresiones: A= año MOD 19 B= año MOD 4 C= año MOD 7 D= (19*A+24) MOD 30 E= (2*B+4*C+6*D+5) MOD 7 N= (22+D+E) En el que N indica el número de día del mes de marzo (o abril si N es superior a 31) correspondiente al domingo de Pascua. Realizar un programa que determine esta fecha para un año ingresado por teclado.

/*var año = 2020
A = año % 19
B = año % 4
C = año % 7
D = (19*A+24) % 30
E = (2*B+4*C+6*D+5) % 7
N = (22+D+E)
MES = N
MN = 0
if(MES>31){
  MES = N-31
  M1 = `Abril`
}else{
  M1 = `Marzo`
}
console.log(`La fecha es ${MES} de ${M1} corresponde al domingo de Pascua`)*/
