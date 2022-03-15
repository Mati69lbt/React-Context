import { createContext, useState } from "react";
import traslations from "../LanguagesContext";

var initialLanguage = "es";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(traslations[language]);

  const handleLanguage = (e) => {
    //console.log(e.target.value);
    if (e.target.value === "es") {
      setLanguage(traslations.es);
      setTexts(traslations.es);
    } else if (e.target.value === "en") {
      setLanguage(traslations.en);
      setTexts(traslations.en);
    } else if (e.target.value === "it") {
      setLanguage(traslations.it);
      setTexts(traslations.it);
    } else if (e.target.value === "po") {
      setLanguage(traslations.po);
      setTexts(traslations.po);
    }
  };
  const data = { texts, handleLanguage };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };
export default LanguageContext;
