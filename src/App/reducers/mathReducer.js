const MATH_ADD = "MATH_ADD";
const MATH_SUB = "MATH_SUB";

export const mathReducer = (
  state = {
    result: 0,
    lastValues: []
  },
  action
) => {
  switch (action.type) {
    case MATH_ADD:
      return {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
    case MATH_SUB:
      return {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
    default:
      return state;
  }
};
