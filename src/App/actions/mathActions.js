export const add = num => {
  return {
    type: "MATH_ADD",
    payload: num
  };
};

export const sub = num => {
  return {
    type: "MATH_SUB",
    payload: num
  };
};
