import "./globals.css";

export const metadata = {
  title: "Saiesha | Software Engineer",
  description: "Saiesha's software engineering portfolio and blog."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}