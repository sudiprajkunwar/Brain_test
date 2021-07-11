export const GET_CARDS = "GET_CARDS";
const SET_CARDS = "SET_CARDS";

export const getCards = () => ({
  type: GET_CARDS,
});

export const setCards = (card: any) => ({
  type: SET_CARDS,
  card,
});

const initialState = {
  card: [],
};

export const cardReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CARDS:
      const { card } = action;
      return { ...state, card };
    default:
      return state;
  }
};
