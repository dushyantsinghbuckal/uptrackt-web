import "./globals.css";

export const metadata = {
  title: "Uptrackt",
  description: "Enterprise-grade customer experience analytics platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
