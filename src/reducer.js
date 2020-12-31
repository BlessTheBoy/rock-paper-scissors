export const initialState = {
  score: { you: 10, computer: 0, ties: 5 },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "OPTION-SELECTED":
      // increase player score by 1
      let choice = action.element;
      return state;
    case "CHOOSE-WINNER":
      // increase computer score by 1
      let playerChoice = action.element;
      let botChoice = ["rock", "paper", "scissors"][
        Math.floor(Math.random() * 3)
      ];
      let winner = decideWinner(playerChoice, botChoice);
      console.log("You chose: ", playerChoice);
      console.log("The Computer chose: ", botChoice);
      console.log("And the winner is: ", winner);
      return state;
    case "TIE":
      // increase ties by 1
      break;

    default:
      return state;
  }
};

function decideWinner(yourChoice, computerChoice) {
  var rpsDataBase = {
    rock: { rock: "ties", paper: "computer", scissors: "you" },
    paper: { rock: "you", paper: "ties", scissors: "computer" },
    scissors: { rock: "computer", paper: "you", scissors: "ties" },
  };

  return rpsDataBase[yourChoice][computerChoice];
}

export default reducer;
