import { useState, createContext } from 'react';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [User, setUser] = useState();

  const value = {
    User,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
