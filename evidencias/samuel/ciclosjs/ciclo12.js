var n = Math.trunc(Math.random() * 100);

x = "";
for(let i = 0; i<n; i++){
    
    for (let j = 1; j < i; j++) {
        x = x + "*"
        
    }
    x = x + "\n"
}

console.log(x)