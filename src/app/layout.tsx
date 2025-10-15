import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// fonts
import { Figtree, JetBrains_Mono, Spectral } from "next/font/google";

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

// metadata

export const metadata: Metadata = {
  title: {
    default: "Ricky Tang",
    template: "%s | Ricky Tang",
  },
  description:
    "meet ricky tang - software engineering student at university of waterloo. aspiring software engineer focusing full-stack development.",
  keywords: [
    "ricky",
    "ricky tang",
    "ricky tang uw",
    "ricky tang uw se",
    "ricky tang uwaterloo",
    "ricky uw",
    "ricky uwaterloo",
    "ricky uw se",
    "swe",
    "software",
    "software engineering",
    "software engineer",
    "ricky tang portfolio",
    "ricky website",
    "ricky tang website",
    "uwaterloo software engineering",
    "uwaterloo se",
  ],
  authors: [{ name: "Ricky Tang" }],
  creator: "Ricky Tang",

  metadataBase: new URL("https://www.rickyt.tech"),

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.rickyt.tech",
    siteName: "rickyt.tech",
    title: "Ricky Tang",
    description:
      "meet ricky tang - software engineering student at university of waterloo. aspiring software engineer focusing full-stack development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ricky Tang",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ricky Tang",
    description:
      "meet ricky tang - software engineering student at university of waterloo. aspiring software engineer focusing full-stack development.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "/",
  },
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

        {/* Theme initialization */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
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
          `}
        </Script>
      </body>
      {/* Google Analytics (next third parties) */}
      <GoogleAnalytics gaId="G-ZY5XWJ2B3D" />
    </html>
  );
}
