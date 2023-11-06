import { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <button
        className="cursor-pointer text-main-blue dark:text-main-pink duration-1000 flex justify-center items-center border-main-blue dark:border-main-pink"
        onClick={handleThemeSwitch}
      >
        {theme === "dark" ? (
          <FaSun className="" />
        ) : (
          <MdDarkMode className="" />
        )}
      </button>
    </>
  );
}
