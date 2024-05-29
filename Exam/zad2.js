const Guess = {
	isCorrect: false,
  	attempts: 0
}

function guessNumber(guesses){
	let num = Math.floor(Math.random()*(100-1+1)+1);
    //console.log(num);
  	let guess = false;
  	let count = 0;
  	for(let n of guesses){
      	count += 1;
    	if (n == num){
        	Guess.isCorrect = true;
          	Guess.attempts = count;
          	return Guess;
        }
    }
  	Guess.attempts = guesses.length;
  	return Guess;
}

let guesses = [2,8,10,25,44,55,66,100];
console.log(guessNumber(guesses))