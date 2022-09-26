function myGuessANumber() {
    
    const readline = require ('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let computerGuess = Math.floor(Math.random() * 100);
    let guess;

    let recurciveAsyncReadLine = function() {
        readline.question('Guess the number (0-100): ', number => {

            guess = Number(number);

            if (guess <= 100 && guess >= 0) {

                if (guess == computerGuess) {
                    console.log('You guess it!');
                    return readline.close();
                } else if (guess < computerGuess) {
                    console.log('Too low!');
                    recurciveAsyncReadLine();
                } else if (guess > computerGuess) {
                    console.log('Too High!');
                    recurciveAsyncReadLine();
                }
            } else {
                console.log('Invalid input! Try again...');
                recurciveAsyncReadLine();
            }
        });
    }

    recurciveAsyncReadLine();
}

myGuessANumber();