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

    calcularsuma(vector){
        this.suma=0
        for (let i = 0; i < vector.length; i++) {
            this.suma+=vector[i];
        }
    
    }

    promedio(vector) {
        this.promedio=0
        for (let i = 0; i < vector.length; i++) {
            this.suma+=vector[i]; 
            this.promedio=this.suma/vector.length
        }
    }

    menor(vector){
        this.minimo=Math.min.apply(null,vector)
    }

    mayor(vector){
        this.maximo=Math.max.apply(null,vector)
    }

}

let vec=[]
let ob=new Numeros(vec);
ob.llenarVector(10);
console.log(ob.vector);

ob.calcularsuma(vec)
console.log(`La suma es ${ob.suma}`)

ob.promedio(vec)
console.log(`El promedio es ${ob.promedio}`)

ob.menor(vec)
console.log(`El numero menor es ${ob.minimo}`)

ob.mayor(vec)
console.log(`El numero mayor es ${ob.maximo}`)