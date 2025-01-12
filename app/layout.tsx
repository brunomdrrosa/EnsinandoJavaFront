import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ensinando Java",
  description:
    "Aprenda programação em Java de forma simples e prática! Focado para programadores iniciantes e avançados, domine uma das linguagens mais populares do mercado.",
  keywords: ["Java", "Programação", "Curso Java", "Aprender Java", "Tutorial Java"],
  authors: [{ name: "Bruno Machado da Rosa" }],
  creator: "Bruno Machado da Rosa",
  publisher: "Ensinando Java",
  applicationName: "Ensinando Java",
  themeColor: "#141318",
  colorScheme: "light dark",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Ensinando Java",
    description:
      "Aprenda programação em Java com tutoriais simples e práticos! Desde conceitos básicos até projetos avançados.",
    siteName: "Ensinando Java",
    images: [
      {
        url: "https://i.imgur.com/UoHBPzR.png",
        width: 1200,
        height: 600,
        alt: "Ensinando Java",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/icon.ico"
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          fontFamily: "var(--font-geist-sans), sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
