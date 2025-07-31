import type { Metadata } from "next";
import { Figtree, JetBrains_Mono, Spectral } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "@/components/theme-provider";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ricky Tang",
  description: "Ricky Tang's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${figtree.variable} ${jetbrainsMono.variable} ${spectral.variable}`} 
      suppressHydrationWarning
      style={{ transition: 'background-color 0.5s ease-in-out, color 0.5s ease-in-out' }}
    >
      <head>
        <link rel="icon" href="/favicon.ico" /> 
      </head>
      <body style={{ margin: 0, paddingTop: '6rem' }} className="flex flex-col justify-center items-center">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Navbar />
          <div className="flex flex-col min-h-screen">
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
