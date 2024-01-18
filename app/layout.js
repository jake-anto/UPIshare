import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "./theme";

export const metadata = {
  title: "UPIshare - Generate a personalized payment QR code for every occasion",
  description:
    "Generate a personalized payment QR code for every occasion. Use any UPI app to scan and pay. Open source and privacy focused.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark" theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
