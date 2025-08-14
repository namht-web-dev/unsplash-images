import { FaMoon, FaSun } from "react-icons/fa";
import { useGlobalContext } from "./context";

const ThemeToggle = () => {
  const { darkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <div className="toggle-container">
      <button onClick={toggleDarkTheme} className="dark-toggle" type="button">
        {darkTheme ? (
          <FaSun className="toggle-icon light" />
        ) : (
          <FaMoon className="toggle-icon dark" />
        )}
      </button>
    </div>
  );
};
export default ThemeToggle;
