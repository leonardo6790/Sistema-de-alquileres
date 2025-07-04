import { createContext, useState, useContext } from "react";

const RolContext = createContext();

export const RolProvider = ({ children }) => {
  const [rol, setRol] = useState("");

  return (
    <RolContext.Provider value={{ rol, setRol }}>
      {children}
    </RolContext.Provider>
  );
};

export const useRol = () => useContext(RolContext);