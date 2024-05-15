function compare(a, b) {
    if (a < b) {
         return 1
    }
    if (a > b) {
        return -1
    }
    return 0
}
function generateRandom(min, max) { 
    return Math.floor(Math.random() * (max - min+1)+min)
}
let arr = [];
for(let i=0; i<10; i++){
    arr.push(generateRandom(1, 20));
}
arr = arr.filter((item) => item > 10)
//arr.sort((a,b) => a>b ? -1:1)
//let sum = arr.reduce((previous, current) => previous + current);
//console.log("Suma elementów tablicy:", sum);
console.log(arr)
console.log((arr.length >= 5) ? "udalo sie" : "niestety nie");