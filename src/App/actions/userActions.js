export const setName = name => {
  return {
    type: "USER_NAME",
    payload: name
  };
};

export const setAge = age => {
  return {
    type: "USER_AGE",
    payload: age
  };
};
