"use client";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import {  isDarkTheme, toggleTheme, useThemeContext } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const {theme, setTheme} = useThemeContext();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  return (
    <IconButton
      onClick={() => toggleTheme({theme, setTheme})}>
      {isDarkTheme(theme) ? <LightModeIcon /> :  <DarkModeIcon style={{ color: 'black' }} /> }
    </IconButton>
  )
}
