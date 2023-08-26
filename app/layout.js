export const metadata = {
  title: "UPI QR Code Generator",
  description: "Created by Jake Anto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
