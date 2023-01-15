import { useState } from "react";
import { createContext } from "react";

export const PageContext = createContext();

export const PageContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
};
