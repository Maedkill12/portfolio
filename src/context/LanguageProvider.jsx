import React, { createContext, useReducer } from "react";
import { en } from "../lang";

export const languageContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, lang: action.payload };
    default:
      return state;
  }
};

const LanguageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    lang: en,
  });
  return (
    <languageContext.Provider value={{ ...state, dispatch }}>
      {" "}
      {children}
    </languageContext.Provider>
  );
};

export default LanguageProvider;
