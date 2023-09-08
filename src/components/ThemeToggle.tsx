"use client";
import { useContext, useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { darkTheme, lightTheme } from "@/theme/styles";
import { ThemeContext } from "@/theme/ThemeContext";

export default function ThemeToggle() {
  const {theme, setTheme} = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  return (
    <IconButton
      onClick={() => theme === darkTheme ? setTheme(lightTheme): setTheme(darkTheme)}>
      {theme === lightTheme ? <DarkModeIcon style={{ color: 'black' }} /> : <LightModeIcon />}
    </IconButton>
  )
}
