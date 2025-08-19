import type { Metadata } from "next";
import { Figtree, JetBrains_Mono, Spectral } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
      style={{
        transition: "background-color 0.5s ease-in-out, color 0.5s ease-in-out",
      }}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZY5XWJ2B3D"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZY5XWJ2B3D');
              console.log('Google tag (gtag.js) loaded');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Check for saved theme preference
                var savedTheme = localStorage.getItem('rickytang-theme');
                
                if (savedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else if (savedTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  // Default to system theme
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  document.documentElement.classList.toggle('dark', systemTheme === 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        style={{ margin: 0, paddingTop: "6rem" }}
        className="flex flex-col justify-center items-center"
      >
        <Navbar />
        <div className="flex flex-col min-h-screen w-full px-7 sm:px-10 md:px-12 lg:px-16 pt-16 sm:pt-20 md:pt-24 lg:pt-30 pb-6 sm:pb-8 md:pb-10">
          <div className="flex-1">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
