x = Math.floor(Math.random()*10)

n = Math.floor(Math.random()*10)
console.log(n)
total=1
for (let a = 0; a <n; a++) {
    total=total*x
    
}
if (n==0) {
    total=1
}
console.log(`el resultado de ${x} a la ${n} es ${total}`)