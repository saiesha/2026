import "./globals.css";

export const metadata = {
  title: "Saiesha Chevvakula",
  description: "Software engineer, problem solver, and curious human.",
  openGraph: {
    title: "Saiesha Chevvakula",
    description: "Software engineer, problem solver, and curious human.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Saiesha Chevvakula",
    description: "Software engineer, problem solver, and curious human."
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
