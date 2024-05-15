function printNumbers(nr){
    arr = [];
    while(nr > 0){
        arr.push(nr % 10);
        nr = Math.floor(nr / 10);
    }
    arr.reverse();
    return arr
}
console.log(printNumbers(12345));