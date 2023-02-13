import { useEffect, useState } from "react";

import { ReactComponent as MoonIcon } from "assets/icon-moon.svg";
import { ReactComponent as SunIcon } from "assets/icon-sun.svg";

import styles from "./ThemeSwitcher.module.scss";

export const ThemeSwitcher = () => {
  const [isDark, setDark] = useState(false);
  const themeText = isDark ? "Light" : "Dark";
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Tasks planner</h2>
      <div className={styles.switcher} onClick={() => setDark(!isDark)}>
        <span>{themeText}</span>
        <ThemeIcon className={styles.icon} />
      </div>
    </div>
  );
};
