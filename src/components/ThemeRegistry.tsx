'use client';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#66FF66',
      contrastText: '#00390A',
    },
    secondary: {
      main: '#B9CCB4',
      contrastText: '#243424',
    },
    tertiary: {
      main: '#A1CED5',
      contrastText: '#00363C',
    },
    error: {
      main: '#FFB4AB',
    },
    background: {
      default: '#1A1C19',
      paper: '#1A1C19',
    },
    text: {
      primary: '#E2E3DE',
      secondary: '#C2C9BE',
    },
    action: {
        active: '#8C9389' // for outline
    }
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    displayLarge: { fontSize: '80px', fontWeight: 700 },
    headlineLarge: { fontSize: '48px', fontWeight: 600 },
    headlineMedium: { fontSize: '32px', fontWeight: 600 },
    titleLarge: { fontSize: '22px', fontWeight: 500 },
    bodyLarge: { fontSize: '16px', fontWeight: 400, lineHeight: '24px' },
    labelLarge: { fontSize: '14px', fontWeight: 500 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.shape === 'full' && {
            borderRadius: theme.shape.borderRadius * 999,
          }),
        }),
      },
    },
  },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
