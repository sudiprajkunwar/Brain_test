export const POST_USER = "POST_USER";
export const POST_USER_SUCCESS = "POST_USER_SUCCESS";
export const POST_USER_FAILED = "POST_USER_FAILED";

export const postUser = (payload: any) => ({
  type: POST_USER,
  payload,
});

export const postUserSuccess = (payload: any) => ({
  type: POST_USER_SUCCESS,
  payload,
});

export const postUserFailed = (payload: any) => ({
  type: POST_USER_FAILED,
  payload,
});

const initialState = {
  isLoading: false,
  user: [],
  error: null,
};
export const UserReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case POST_USER:
      return { ...state, isLoading: true };
    case POST_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: [...state.user, payload],
      };
    case POST_USER_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

// export const GET_CARDS = "GET_CARDS";
// export const GET_CARDS_SUCCESS = "GET_CARDS_SUCCESS";
// export const GET_CARDS_FAILED = "GET_CARDS_FAILED";

// const SET_CARDS = "SET_CARDS";

// export const getCards = () => ({
//   type: GET_CARDS,
// });

// export const getCardsSuccess = (payload: any) => ({
//   type: GET_CARDS_SUCCESS,
//   payload,
// });

// export const getCardsFailed = (payload: any) => ({
//   type: GET_CARDS_FAILED,
//   payload,
// });

// export const setCards = (card: any) => ({
//   type: SET_CARDS,
//   card,
// });

// type stateProps = {
//   loading: boolean;
//   user: any;
//   error: string;
// };
// const userInitialState: stateProps = {
//   loading: true,
//   user: [],
//   error: "",
// };

// export const cardReducer = (state = userInitialState, action: any) => {
//   switch (action.type) {
//     case GET_CARDS:
//       return {
//         ...state,
//         loading: true,
//       };
//     case GET_CARDS_SUCCESS:
//       return {
//         loading: false,
//         cards: action.payload,
//         error: "",
//       };
//     case GET_CARDS_FAILED:
//       return {
//         loading: false,
//         cards: [],
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };
