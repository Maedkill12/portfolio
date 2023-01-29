import { useContext } from "react";
import { languageContext } from "../context/LanguageProvider";

const useLanguage = () => {
  const context = useContext(languageContext);
  if (!context) {
    throw new Error("useLanguage must be inside LanguageProvider");
  }
  return context;
};
export default useLanguage;
