let max = prompt("guess the max num");

let random = Math.floor(Math.random() * max) + 1;

let userGuess = prompt("enter your guess");

while (true) {
  if (userGuess == "quit") {
    console.log("you quit the game");
    break;
  }
  if (userGuess == random) {
    console.log(
      `Congratulations you guessed it right! The random num was ${random}`,
    );
    break;
  } else if (userGuess > random) {
    userGuess = prompt("HINT: You guess is greater than number");
  } else if (userGuess < random) {
    userGuess = prompt("HINT: Your guess is less than number");
  } else {
    userGuess = prompt("your guessed it wrong! Please try Again");
  }
}
