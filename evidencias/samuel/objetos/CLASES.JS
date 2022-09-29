//permite crear un nuevo tipo de dato estado y comportamiento(funciones)
//los objetos tienen lo de arriba,las funciones pueden estar dentro de otras ,
//no se puede poner dentro de los corchetes

//metodo y no se recomienda usar flecha ,clasicas sin sin escribir function
//CONSTRUCTOR POR DEFECTO

//Var,CONST,LET
//new es reservada y es un nuevo objeto
//typeof es para saber cual es el tipo de objeto

class animal{
    constructor(nombre){
       this._nombre=nombre;
       //console.log('se activo el constructor);
    }
    /*camell case
    get nombre (){
        return this.nombre;
    }*/
    //captura el valor 
    get nombre(){
        return this._nombre;
    }
    /*
setnombre(nombre){
    this.nombre=nombre;
}
*/
//cambia el valor 
set nombre(nombre){
this._nombre=nombre;
}
mensaje (){
    console.log('soy un mensaje');
}
}

var objeto1= new animal('gatito');
var objeto2= new animal('perrito');
var objeto3= new animal('serpiente');
console.log(objeto1)
console.log(objeto2)
console.log(objeto3)
//objeto1.setNombre('liebre)
objeto1._nombre='conejo domestico';
objeto2._nombre='girafa';
objeto3._nombre='hamster';
//console.log (objeto1.getnombre())
console.log(objeto1.nombre);
console.log(objeto2.nombre);
console.log(objeto3.nombre);
/*console.log (typeof(objeto1))
function suma (num1,num2){
    return num1+num2;
}
*/
class Numeros{
    constructor(vector){
        this._vector=vector;
    }
    llenarVector(tam){
        for (let i = 0; i < tam; i++) {
           this._vector[i]=Math.round(Math.random()*100)

        }
    }

    get vector(){
        return this._vector;
    }

}

let vec=[]
let ob=new Numeros(vec);
ob.llenarVector(10);
console.log(ob.vector);