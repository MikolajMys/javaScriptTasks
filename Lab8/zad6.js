function random(max){
    return Math.floor(Math.random()*(max-0+1)+0)
}
arr = [];
for(let i = 0; i < 5; i++){
    arr.push(random(10));
}
let sum = arr.reduce((a,b) => a + b);
console.log(arr);
arr.sort((a,b) => a < b ? -1:1);
console.log(arr);
console.log("suma:" + sum);
let avg = sum / arr.length;
console.log("srednia:" + avg);