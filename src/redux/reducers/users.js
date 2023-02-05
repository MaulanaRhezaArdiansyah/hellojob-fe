const initialState = {
  loading: false,
  data: [],
  response: {},
  error: null,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_USERS_REQUEST":
      return {
        ...state,
        loading: true,
        data: [],
      };
    case "GET_DATA_USERS_SUCCESS":
      return {
        ...state,
        loading: false,
        response: {
          message: action.payload.message,
          status: action.payload.status,
        },
        data: action.payload.data,
      };
    case "GET_DATA_USERS_FAIL":
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
