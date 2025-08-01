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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function updateTheme() {
                  try {
                    var theme = sessionStorage.getItem('rickytang-theme');
                    if (theme === 'system' || !theme) {
                      var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                      document.documentElement.classList.toggle('dark', systemTheme === 'dark');
                    } else {
                      document.documentElement.classList.toggle('dark', theme === 'dark');
                    }
                  } catch (e) {
                    console.log('Theme detection failed:', e);
                  }
                }
                
                // Initial theme setup
                updateTheme();
                
                // Listen for system theme changes
                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);
              })();
            `,
          }}
        />
      </head>
      <body style={{ margin: 0, paddingTop: '6rem' }} className="flex flex-col justify-center items-center">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="rickytang-theme"
        >
          <Navbar />
          <div className="flex flex-col min-h-screen w-full">
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
