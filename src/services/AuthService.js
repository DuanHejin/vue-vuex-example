let logined = false;

export const login = () => {
  logined = true;
  return logined;
};

export const isLoggedIn = () => {
  return logined;
};

export const logout = () => {
  logined = false;
  return logined;
};


