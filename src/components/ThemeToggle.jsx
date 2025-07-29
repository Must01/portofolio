import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(theme);
    document.documentElement.classList.toggle("dark", theme);
  }, []);

  const toggle = () => {
    const next = !isDark;
    localStorage.theme = next ? "dark" : "light";
    document.documentElement.classList.toggle("dark", next);
    setIsDark(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="p-2 rounded-full bg-card/50 hover:bg-card transition"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};
