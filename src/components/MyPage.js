import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import traslations from "./Languages";

var initialTheme = "light";
var initialLanguage = "es";
var initialAuth = null;

const MyPage = () => {
  const [theme, setTheme] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(traslations[language]);
  const [auth, setAuth] = useState(initialAuth);

  const handleTheme = (e) => {
    // console.log(e.target.value);
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

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

  const handleAuth = (e) => {
    if (auth) {
      setAuth(null);
    } else {
      setAuth(true);
    }
  };

  return (
    <div className="my-page">
      <Header
        theme={theme}
        handleTheme={handleTheme}
        texts={texts}
        handleLanguage={handleLanguage}
        auth={auth}
        handleAuth={handleAuth}
      />
      <Main theme={theme} texts={texts} auth={auth} />
      <Footer theme={theme} texts={texts} />
    </div>
  );
};

export default MyPage;
