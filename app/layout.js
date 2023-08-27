export const metadata = {
  title: "UPI QR Code Generator",
  description: "Created by Jake Anto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff5722" />
        <meta name="msapplication-TileColor" content="#ff5722" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        style={{
          margin: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}
