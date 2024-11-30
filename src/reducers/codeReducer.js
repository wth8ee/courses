const initialState = {
  code: "",
};

export function codeReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CODE":
      return {
        ...state,
        code: action.payload,
      };
    default:
      return state;
  }
}
