const USER_NAME = "USER_NAME";
const USER_AGE = "USER_AGE";

export const userReducer = (
  state = {
    name: "",
    age: "",
    lastValue: []
  },
  action
) => {
  switch (action.type) {
    case USER_NAME:
      return {
        ...state,
        name: action.payload,
        lastValue: [...state.lastValue, action.payload]
      };
    case USER_AGE:
      return {
        ...state,
        age: action.payload
      };
    default:
      return state;
  }
};
