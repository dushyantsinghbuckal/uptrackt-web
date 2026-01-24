import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Uptrackt – Customer Experience Intelligence for Retail",
    template: "%s | Uptrackt",
  },
  description:
    "Uptrackt helps retail and e-commerce teams capture customer feedback, identify friction, and turn insights into measurable growth.",
  keywords: [
    "customer experience intelligence",
    "retail analytics",
    "e-commerce feedback",
    "customer insights",
    "Uptrackt",
  ],
  authors: [{ name: "Uptrackt" }],
  creator: "Uptrackt",
  metadataBase: new URL("http://localhost:3000"),

  openGraph: {
    title: "Uptrackt – Customer Experience Intelligence",
    description:
      "Capture customer feedback at critical moments. Identify friction, act faster, and drive growth.",
    url: "http://localhost:3000",
    siteName: "Uptrackt",
    images: [
      {
        url: "/file.svg", // your logo in public folder
        width: 1200,
        height: 630,
        alt: "Uptrackt",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Uptrackt – Customer Experience Intelligence",
    description:
      "Turn customer feedback into growth with Uptrackt.",
    images: ["/File.svg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );  
}
