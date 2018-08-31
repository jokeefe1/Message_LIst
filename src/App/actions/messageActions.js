export const addMessage = message => {
  return {
    type: "MESSAGE_ADD",
    payload: message
  };
};

export const delMessage = id => {
  return {
    type: "MESSAGE_DEL",
    payload: id
  };
};
