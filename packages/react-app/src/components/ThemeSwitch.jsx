import React, { useEffect, useState } from "react";
import { Switch } from "antd";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { ReactSVG } from 'react-svg';
import LightDark from '../assets/light_dark.svg';

export default function ThemeSwitcher() {

  const theme = window.localStorage.getItem("theme");
  const [isDarkMode, setIsDarkMode] = useState(!theme || theme === "light" ? false : true);
  const { switcher, currentTheme, themes } = useThemeSwitcher();

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const toggleTheme = (isChecked) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  // Avoid theme change flicker
  // if (status === "loading") {
  //   return null;
  // }

  return (
    <div className="main fade-in" style={{position:'relative'}}>
      <span style={{position: 'absolute', left: '3px', top: '3px', width: '37px'}}><ReactSVG src={LightDark} /></span>
      <Switch checked={isDarkMode} onChange={toggleTheme} />
    </div>
  );
}
