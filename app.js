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
    const options = document.querySelectorAll('options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');


    //Computer Options
    
    const computerOptions = ['rock', 'paper', 'scissors'];

  }

  console.log('game')
  //Call all inner function
  startGame();
}

game();