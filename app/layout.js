import "./globals.css";

export const metadata = {
  title: "UPI QR Code Generator",
  description: "Created by Jake Anto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
