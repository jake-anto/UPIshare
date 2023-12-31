import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";

export const metadata = {
  title: "UPI QR Code Generator",
  description: "Generate UPI QR codes for payments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark">{children}</MantineProvider>
      </body>
    </html>
  );
}
