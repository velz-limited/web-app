import { Roboto } from 'next/font/google';
import { createTheme, ThemeOptions } from '@mui/material/styles';

const darkThemeOptions:ThemeOptions = {
    palette: {
        mode: 'dark',
    }
};

const lightThemeOptions:ThemeOptions = {
    palette: {
        mode: 'light',
    }
};

const darkTheme = createTheme(darkThemeOptions);
const lightTheme = createTheme(lightThemeOptions);

export default { darkTheme, lightTheme };