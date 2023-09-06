// Adapted from: https://github.com/DiMatteoL/buzzrank-tutorial/tree/main
"use client";

import * as React from 'react';
import { Theme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import { ThemeProvider as PreferredThemeProvider } from "next-themes";
import { useTheme } from "next-themes";
import { GlobalStyles } from "@mui/material";
import { darkTheme, globalStyles, lightTheme } from "@/theme/styles";
import {useState, useEffect} from "react";

export type ThemeRegistryProps = {
    theme: Theme;
    children: React.ReactNode;
};

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  useEffect(() => {
    resolvedTheme === "light"
      ? setCurrentTheme(lightTheme)
      : setCurrentTheme(darkTheme);
  }, [resolvedTheme]);

  return (
    <PreferredThemeProvider>
      <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
        <ThemeProvider theme={currentTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <GlobalStyles styles={globalStyles} />
          {children}
        </ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </PreferredThemeProvider>
  );
}
