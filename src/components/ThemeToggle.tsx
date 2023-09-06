"use client";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import { useTheme } from "next-themes";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  return (
    <IconButton
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}>
      {resolvedTheme === "light" ? <DarkModeIcon style={{ color: 'black' }} /> : <LightModeIcon />}
    </IconButton>
  )
}
