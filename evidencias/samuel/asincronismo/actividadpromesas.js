function contarletras (vec) {
    
    return new Promise((resolve, reject) => {
        mayus = vec.toUpperCase()
        minus = vec.toLowerCase()
    m = [0,0]
        for (let i = 0; i < vec.length; i++) {
            if (parseInt(vec[i])/parseInt(vec[i])==1) {
                reject('igreso un numero en la cadena')
            } else if (vec[i]==mayus[i] && vec[i]==minus[i]) {
                reject('ingreso un simbolo en la cadena')
            } else if (vec[i]==mayus[i] && vec[i]!=minus[i]) {
                m[0]++
            }else if (vec[i]!=mayus[i] && vec[i]==minus[i]){
                m[1]++
            }
            
        }
        resolve(`la cantidad de mayusculas es ${m[0]} y la de minusculas es ${m[1]}`)
    })
} 
contarletras('AEIOUaei1')
.then(function(result){
            console.log(result)
        }).catch(function(result){
            console.log(result)
        });

function llenarvector(vec) {
    return new Promise((resolve, reject) => {
        if (typeof(vec)=='object') {
            for (let i = 0; i < 11; i++) {
                vec[i]=Math.round(Math.random()*100)
                
            }
            resolve (vec)
        } else {
            reject()
        }
        
    })
}
vector = []
llenarvector(vector).then((result) => {
    console.log(result)
}).catch(function(error){
    console.log('el resultado no es un vector')
});


llenarvector(5).then((result) => {
    console.log(result)
}).catch(function(){
    console.log('el valor ingresado no es un vector')
});

function sumarvector (vec) {
    return new Promise((resolve, reject) => {
        total = 0
        if (typeof(vec)=='object') {
            for (let i = 0; i < 10; i++) {
                total+=vec[i]
                
            }
            resolve (total)
        } else {
            reject()
        }
    })
}

sumarvector(vector).then((result) => {
    console.log(result)
}).catch(function(){
    console.log('el valor ingresado no es un vector xd')
});

sumarvector('papas').then((result) => {
    console.log(result)
}).catch(function(){
    console.log('el valor ingresado no es un vector xd')
});

function promedio (vec) {
    
    return new Promise((resolve, reject) => {
        total = 0
        if (typeof(vec)=='object') {
            for (let i = 0; i < 10; i++) {
                total+=vec[i]
                
            }
            resolve (total/vec.length)
        } else {
            reject()
        }
    })

}

promedio(vector).then((result) => {
    console.log(result)
}).catch(function(){
    console.log('el valor ingresado no es un vector xd')
});