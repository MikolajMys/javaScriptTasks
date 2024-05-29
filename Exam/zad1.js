class NumbersAnalyzer{
	arr = []
  	constructor(arr){
    	this.arr = arr;
    }
  	count(){return this.arr.length}
  	sum(){return arr.reduce((a,b) => a+b)}
  	average(){return this.sum()/this.arr.length}
  	min(){return Math.min(...this.arr)}
  	max(){return Math.max(...this.arr)}
  	harmonic(){ 
        let n = this.arr.length;
        let sum = 0; 
        for (let i = 0; i < n; i++){
            sum = sum + (1 / this.arr[i]); 
        }
        return n/sum; 
	} 
}

let arr = [1,2,3,4,5,6,7,8,9];
let num = new NumbersAnalyzer(arr);
console.log(num.arr);
console.log(num.count());
console.log(num.sum());
console.log(num.average());
console.log(num.min());
console.log(num.max());
console.log(num.harmonic());