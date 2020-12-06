const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const matchScreen = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      matchScreen.classList.add("fadeIn");
    });
  };

  //Play Match

  const playGame = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const computerOptions = ["rock", "paper", "scissors"];

    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    //Player Choice

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const playerChoice = this.textContent;

        //Set image to rock hand
        playerHand.src = `assets/rock.png`;
        computerHand.src = `assets/rock.png`;

        const winner = document.querySelector(".winner");
        winner.textContent = "...";

        //Computer Choice

        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        //animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";

        setTimeout(() => {
          //Comparing 2 choices
          compareHands(playerChoice, computerChoice);

          //Update image
          playerHand.src = `assets/${playerChoice}.png`;
          computerHand.src = `assets/${computerChoice}.png`;

          //Update Score
          updateScore();
        }, 2000);
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  //Comparing function
  const compareHands = (playerChoice, computerChoice) => {
    //Text show win/lose/tie
    const winner = document.querySelector(".winner");
    //Comparing
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }

    //Check for Rock
    if (playerChoice == "rock") {
      if (computerChoice == "scissors") {
        winner.textContent = "Player wins";
        pScore++;
        return;
      } else if (computerChoice == "paper") {
        winner.textContent = "Computer wins";
        cScore++;
        return;
      }
    }

    //Check for scissors
    if (playerChoice == "scissors") {
      if (computerChoice == "rock") {
        winner.textContent = "Computer wins";
        cScore++;
        return;
      }
      if (computerChoice == "paper") {
        winner.textContent = "Player wins";
        pScore++;
        return;
      }
    }

    //Check for paper
    if (playerChoice == "paper") {
      if (computerChoice == "rock") {
        winner.textContent = "Player wins";
        pScore++;
        return;
      }
      if (computerChoice == "scissors") {
        winner.textContent = "Computer wins";
        cScore++;
        return;
      }
    }
  };

  //Call all inner function
  startGame();
  playGame();
};

game();
