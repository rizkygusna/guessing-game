let maximum = parseInt(prompt("enter maximum number!")) ; //parseInt to detect integer in string
while(!maximum){ //if no integer detected, NaN is falsy
    maximum = parseInt(prompt("enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1; //generate random number in range 0 to maximum
console.log(targetNum);
let guess = parseInt(prompt("Enter your guess!"));
let attempts = 1;

while(parseInt(guess) !== targetNum){
    if (guess === 'q'){ //quiting route
        break;
    }
    attempts++; //increase the attempt by one
    if (guess > targetNum){
        guess = prompt("Too high! Guess again");
    }
    else {
        guess = prompt("Too low! Guess again");
    }
}

if(guess==='q'){
    console.log("ok you quit");
}
else{
    console.log(`Congrats! You got it in ${attempts} attempts`);

}