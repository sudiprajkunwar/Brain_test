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
