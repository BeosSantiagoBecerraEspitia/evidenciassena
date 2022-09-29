function base (){  
    return new Promise(function(resolve,reject){
        resolve()
        setTimeout(() => {
            console.log('la linea de cidigo dentro de la function')
        }, 500);

    })
}

base()
    .then(()=>{  
        console.log('en el then .')
    })
    .then(auxiliar)

function auxiliar(){
    console.log('function auxiliar')
}



//-------------------------------------PASAR ESTAS FUNCIONES CON PROMISE --------//

function trabajoArreglos(cb1,cb2){
    let vec=[]
        setTimeout(() => {
        console.log(vec)
    }, 1000);
    vec=cb1(vec);
    console.log(cb2(vec));
    }
    
    // function cualquierFunction(vec){
    //     console.log(`El parametro es de tipo ${typeof(vec)}`)
    //     return [];
    // }
    
    function llenaArreglo(vec){
    for (let i = 0; i < 10; i++) {
        vec[i]=Math.round(Math.random()*100)    
        }
        return vec;
    }
    function sumarArreglo(vec){
        let suma=0
        for (let i = 0; i < vec.length; i++) {
            suma+=vec[i];
        }
           return suma;
    }   
    
    trabajoArreglos(llenaArreglo,sumarArreglo);
//promesi

function arreglo() {
    return new Promise((resolve,reject)=>{
    
    let vector=[];
    let tamaño=Math.round((Math.random()*20-10)+10);
    console.log('valor de la variable tam',tamaño)
            for (let i =0; i < tamaño; i++){
                vector[i]=Math.round(Math.random()*100);
            } console.log(vector)
            resolve(vector) 
    }
    
    )
}        

arreglo()
    .then((vector)=>{
        let sum=0
        for (let i =0; i <vector.length; i++){
            sum +=vector[i]
        } console.log('la suma de los elementos es ',sum)

    })
       
