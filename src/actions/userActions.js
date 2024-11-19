export const setUser = user => {
  return {
    type: "SET_USER",
    payload: {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    },
  };
};

export const clearUser = () => {
  return {
    type: "CLEAR_USER",
  };
};
