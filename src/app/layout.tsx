"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";

import AppBarUI from "./components/AppBar";

import { theme } from "./styles/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Realty Web Properties" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body>
          <AppBarUI />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
