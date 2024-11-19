const initialState = null;

export function progressReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PROGRESS":
      return {
        ...state,
        progress: action.payload,
      };
    default:
      return state;
  }
}
