import React, { createContext, useState } from "react";
import { clothesData } from "../data/clothes";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [clothes, setClothes] = useState(clothesData);
  const [outfit, setOutfit] = useState([]);

  return (
    <AuthContext.Provider value={{ clothes, setClothes, outfit, setOutfit }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
