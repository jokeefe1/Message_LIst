const MESSAGE_ADD = "MESSAGE_ADD";
const MESSAGE_DEL = "MESSAGE_DEL";

export const messageReducer = (
  state = {
    input: "",
    message: []
  },
  action
) => {
  switch (action.type) {
    case MESSAGE_ADD:
      return;
    case MESSAGE_DEL:
      return;
    default:
      return state;
  }
};
