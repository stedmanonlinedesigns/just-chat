import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import { Box } from "@mui/material";
import { Header } from "./components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Just-Chat",
  description: "Small chat application to practice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Box
          sx={{
            height: "100dvh",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <Header />
          <AppRouterCacheProvider>
            <Box sx={{ flexGrow: 1, minHeight: 0, overflow: "hidden" }}>
              {children}
            </Box>
          </AppRouterCacheProvider>
        </Box>
      </body>
    </html>
  );
}
