import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header/page";
import Footer from "@/components/Layout/Footer/page";
import NewLetter from "@/components/Landing/Newsletter";
import { Suspense } from "react";
import GlobalLoading from "@/components/ui/GlobalLoading";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";

const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Kunal Kumar Arya - Full Stack Developer",
  description:
    "Portfolio website of Kunal Kumar Arya - Full Stack Developer passionate about building smooth and scalable web experiences",
  keywords: [
    "Kunal Kumar Arya",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Kunal Kumar Arya" }],
  creator: "Kunal Kumar Arya",
  publisher: "Kunal Kumar Arya",
  openGraph: {
    title: "Kunal Kumar Arya - Full Stack Developer",
    description:
      "Portfolio website of Kunal Kumar Arya - Full Stack Developer passionate about building smooth and scalable web experiences",
    url: "https://kunalarya.dev", // Replace with your actual domain
    siteName: "Kunal Kumar Arya Portfolio",
    images: [
      {
        url: "/logo2.jpg",
        width: 1200,
        height: 630,
        alt: "Kunal Kumar Arya Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kunal Kumar Arya - Full Stack Developer",
    description: "Portfolio website of Kunal Kumar Arya - Full Stack Developer",
    images: ["/logo2.jpg"],
    creator: "@iamkunalarya", // Replace with your Twitter handle
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/logo2.jpg", sizes: "192x192", type: "image/jpeg" },
      { url: "/logo2.jpg", sizes: "512x512", type: "image/jpeg" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="msapplication-TileColor" content="#8b5cf6" />
        <meta name="msapplication-TileImage" content="/logo2.jpg" />
      </head>
      <body
        suppressHydrationWarning
        className={`h-full w-full bg-black overflow-x-hidden ${jetbrainsMono.className} ${jetbrainsMono.variable}`}
      >
        <ScrollProgressBar />
        <Suspense fallback={<GlobalLoading />}>
          <main>
            <Header />
            {children}
            {/* <NewLetter /> */}
            <Footer />
          </main>
        </Suspense>
      </body>
    </html>
  );
}
