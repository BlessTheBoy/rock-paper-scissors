export const initialState = {
  score: { you: 10, computer: 0, ties: 5 },
  selections: [
    {
      image: "images/icon-paper.svg",
      color: {
        border: "hsl(230, 89%, 62%)",
        shadow: " hsl(230, 89%, 65%)",
        background: "#2844BE",
      },
      element: "paper",
    },
    {
      image: "images/icon-scissors.svg",
      color: {
        border: "hsl(39, 89%, 49%)",
        shadow: " hsl(40, 84%, 53%)",
        background: "#C76C1B",
      },
      element: "scissors",
    },
    {
      image: "images/icon-rock.svg",
      color: {
        border: "hsl(349, 71%, 52%)",
        shadow: " hsl(349, 70%, 56%)",
        background: "#9E1533",
      },
      element: "rock",
    },
  ],
  clicked: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "OPTION-SELECTED":
      let playerSelection = state.selections.filter(
        (selection) => selection.element === action.element
      );

      return {
        ...state,
        selections: [
          {
            image: playerSelection[0].image,
            color: playerSelection[0].color,
            element: null,
          },
        ],
        clicked: true,
      };
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
