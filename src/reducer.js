export const initialState = {
  score: { you: 10, computer: 0, ties: 5 },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "WIN":
      // increase player score by 1
      break;
    case "LOSS":
      // increase computer score by 1
      break;
    case "TIE":
      // increase ties by 1
      break;

    default:
      return state;
  }
};

export default reducer;
