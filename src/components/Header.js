import React from "react";

const Header = ({
  theme,
  handleTheme,
  texts,
  handleLanguage,
  auth,
  handleAuth,
}) => {
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
          id="light"
          onClick={handleTheme}
          value="light"
        />
        <label htmlFor="light">{texts.headerLight}</label>
        <input
          type="radio"
          name="theme"
          id="dark"
          onClick={handleTheme}
          value="dark"
        />
        <label htmlFor="dark">{texts.headerDark}</label>
        <button onClick={handleAuth} style={{ marginLeft: "15px" }}>
          {auth ? texts.buttonLogout : texts.buttonLogin}
        </button>
      </header>
    </div>
  );
};

export default Header;
