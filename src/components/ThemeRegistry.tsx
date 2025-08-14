'use client';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5C7F67',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#596153',
      contrastText: '#FFFFFF',
    },
    tertiary: {
      main: '#3A665E',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#BA1A1A',
    },
    background: {
      default: '#FFFBFF',
      paper: '#F9F8F3',
    },
    text: {
      primary: '#1C1C1B',
      secondary: '#494539',
    },
    action: {
        active: '#797465' // for outline
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    displayLarge: { fontSize: '57px', fontWeight: 400 },
    headlineLarge: { fontSize: '32px', fontWeight: 400 },
    titleLarge: { fontSize: '22px', fontWeight: 500 },
    bodyLarge: { fontSize: '16px', fontWeight: 400 },
    labelLarge: { fontSize: '14px', fontWeight: 500 },
  },
  shape: {
    borderRadius: 12, // Medium
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px', // Large
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '28px', // Extra Large
        },
      },
    },
    MuiChip: {
        styleOverrides: {
            root: {
                borderRadius: '8px', // Small
            }
        }
    }
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
