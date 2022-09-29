var n = Math.trunc(Math.random() * 100);

x = "";
for(let i = n; i>0; i--){
    
    for (let j = 1; j < i; j++) {
        x = x + j.toString();
        
    }
    x = x + "\n"
}
console.log(x)