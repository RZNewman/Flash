import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flash TTRPG",
  description: "Flash game database",
};

import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  primaryColor: "violet",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MantineProvider forceColorScheme="dark" theme={theme}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </MantineProvider>
  );
}
