import React, { useContext } from "react";
import AuthContext from "./context/AuthContext";
import LanguageContext from "./context/LanguageContext";
import ThemeContext from "./context/ThemeContext";

const HeaderContext = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { texts, handleLanguage } = useContext(LanguageContext);
  const { auth, handleAuth } = useContext(AuthContext);
  return (
    <div>
      <header className={theme}>
        <h2>{texts.headerTitle}</h2>
        <h3>{texts.headerSubtitle}</h3>
        <select
          name="language"
          onChange={handleLanguage}
          style={{ marginRight: "15px" }}
        >
          <option value="es">ESP</option>
          <option value="en">ENG</option>
          <option value="it">ITA</option>
          <option value="po">POR</option>
        </select>
        <input
          type="radio"
          name="theme"
          id="light-context"
          onClick={handleTheme}
          value="light"
        />
        <label htmlFor="light-context">{texts.headerLight}</label>
        <input
          type="radio"
          name="theme"
          id="dark-context"
          onClick={handleTheme}
          value="dark"
        />
        <label htmlFor="dark-context">{texts.headerDark}</label>
        <button onClick={handleAuth} style={{ marginLeft: "15px" }}>
          {auth ? texts.buttonLogout : texts.buttonLogin}
        </button>
      </header>
    </div>
  );
};

export default HeaderContext;
