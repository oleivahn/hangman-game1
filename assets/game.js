<!DOCTYPE html>

<html>

<head>

    <title>Hangman!</title>

</head>

<body>

    <h1>Hangman!</h1>
    <H1>SORRY! I REALLY TRIED!!!!</H1>
   <h4> Take your pick </h4>
   <p id="c"> "A, B, C, ... Z"</p>

   <button id="guess"> Guess this word:</button>

   </button>

    <script>
   //  document.getElementById("guess")

    // Create an array of words

    var words = ["javascript", "confused", "difficult", "frustration", "help", "necessary", "computer", "crazy", "homework", "impossible"
    ];

    // Pick a random word

    var word = words[Math.floor(Math.random() * words.length)];

    // Create an empty array that will be filled with as many _ as the random word has

    var answerArray = [];
    // Fill in the answerArray with the same number of _ as the length of the word that was picked

    for (var i = 0; i < word.length; i++) {

      answerArray[i] = "_";

    }
    // Main game's body
    // Assign the length of the picked word as the value of remainingLetters to determine when the game ends. Hint: When it reaches 0

    var remainingLetters = word.length;

   // Run the game while remainingLetters is not 0. Everything goes inside of


function game () {
    while (remainingLetters > 0) {

      // Show the player their progress

      alert(answerArray.join(" "));

      // Ask player input

      var guess = prompt("Guess a letter, or click Cancel to stop playing.");
      //   Check player input. If it's not empty do...

      if (guess === null) {

        // if empty, break

        break;
// If user inputs more than 1 letter
      } else if (guess.length !== 1) {

        alert("Please enter a single letter.");

      } else {
         //Do the real game after this...

         // Keep going till remainingLetters = 0 with a for loop
         // Same loop as before but using different var

        for (var j = 0; j < word.length; j++) {
// if index number of word is equal to the user's guess,
          if (word[j] === guess) {
// then the index number (Same one running as a counter here) of answerArray will update the letter that was input
            answerArray[j] = guess;
// Also, lower the remainingLetters by 1. Once it reaches 0, we're done
            remainingLetters--;

          }

        }

      }

    // The end of the game loop

    }
}
game ();
    // Show the answer and congratulate the player

    alert(answerArray.join(" "));

    alert("Good job! The answer was " + word);

    </script>

</body>

</html>
