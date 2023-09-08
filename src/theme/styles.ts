"use client";
import {  createTheme, Theme } from "@mui/material/styles";

export const darkTheme:Theme = createTheme( {
  palette: {
    background: { default: "#2D2D2D", paper: "#2D2D2D"},
    primary: { main: "#9147FF" },
    secondary: { main: "#2a48f3" },
    mode: "dark",
  },
});

export const lightTheme:Theme = createTheme( {
  palette: {
    background: { default: "#D6D6D6", paper: "#D6D6D6"},
    primary: { main: "#9147FF" },
    secondary: { main: "#2a48f3" },
    mode: "light",
  },
});

