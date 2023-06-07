import { useGlobalContext } from "../context/Context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillMoonFill
            className="toggle-icon"
            style={{ color: "#e2e8f0" }}
          />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};
