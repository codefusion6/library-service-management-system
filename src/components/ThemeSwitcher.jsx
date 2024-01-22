// components/ThemeSwitcher.tsx
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="">
      {theme === "dark" ? (
        <MdDarkMode size={25} onClick={() => setTheme("purple-dark")} />
      ) : (
        <MdOutlineDarkMode size={25} onClick={() => setTheme("light")} />
      )}
    </div>
  );
};
