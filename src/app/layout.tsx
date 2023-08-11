/* eslint-disable @next/next/no-page-custom-font */

import { ThemeProvider, CssBaseline } from "@mui/material";

import AppBarUI from "./components/AppBar";
import ClientOnly from "./components/ClientOnly";

import { ModalProvider } from "./contexts/ModalContext";

import getCurrentUser from "./actions/getCurrentUser";

import { theme } from "./styles/theme";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <head>
        <meta name="description" content="Realty Web Properties" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ModalProvider>
          <body>
            <ClientOnly>
              <AppBarUI currentUser={currentUser} />
            </ClientOnly>
            {children}
          </body>
        </ModalProvider>
      </ThemeProvider>
    </html>
  );
}
