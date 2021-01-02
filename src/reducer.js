const allSelections = [
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
];
var playerSelection, botSelection, winner;
export const initialState = {
  score: { you: 10, computer: 0, ties: 5 },
  selections: [...allSelections],
  clicked: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "OPTION-SELECTED":
      playerSelection = allSelections.filter(
        (selection) => selection.element === action.element
      )[0];

      return {
        ...state,
        selections: [
          {
            image: playerSelection.image,
            color: playerSelection.color,
            header: "YOU PICKED",
            element: null,
          },
        ],
        clicked: true,
      };
    case "CHOOSE-WINNER":
      // increase computer score by 1
      let botChoice = ["rock", "paper", "scissors"][
        Math.floor(Math.random() * 3)
      ];
      botSelection = allSelections.filter(
        (selection) => selection.element === botChoice
      )[0];
      winner = decideWinner(action.element, botChoice);
      console.log("You chose: ", action.element);
      console.log("The Computer chose: ", botChoice);
      console.log("And the winner is: ", winner);

      return {
        ...state,
        selections: [
          state.selections[0],
          {
            image: botSelection.image,
            color: botSelection.color,
            header: "THE HOUSE PICKED",
            element: null,
          },
        ],
        clicked: true,
      };
    case "REVEAL-WINNER":
      // increase ties by 1
      if (winner === "you") {
        return {
          ...state,
          selections: [
            {
              image: playerSelection.image,
              color: playerSelection.color,
              header: "YOU PICKED",
              element: null,
              winner: true,
            },
            {
              image: botSelection.image,
              color: botSelection.color,
              header: "THE HOUSE PICKED",
              element: null,
            },
          ],
          score: { ...state.score, you: state.score.you + 1 },
          clicked: true,
          winner,
        };
      } else if (winner === "computer") {
        return {
          ...state,
          selections: [
            state.selections[0],
            {
              image: botSelection.image,
              color: botSelection.color,
              header: "THE HOUSE PICKED",
              element: null,
              winner: true,
            },
          ],
          score: { ...state.score, computer: state.score.computer + 1 },
          clicked: true,
          winner,
        };
      }
      return {
        ...state,
        winner,
        score: { ...state.score, ties: state.score.ties + 1 },
      };

    case "RESET-BOARD":
      return {
        score: state.score,
        selections: [...allSelections],
        clicked: false,
      };
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
