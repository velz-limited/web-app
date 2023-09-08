"use client";

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme } from "@/theme/styles";
import {useState} from "react";
import NextCacheProvider from './NextCacheProvider';
import { ThemeContext } from './ThemeContext';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(darkTheme);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <NextCacheProvider options={{ key: 'mui' }}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {children}
        </ThemeProvider>
      </NextCacheProvider>
    </ThemeContext.Provider>
  );
}
