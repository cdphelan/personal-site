import type { Metadata } from "next";
import { Spectral, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600"], // Include the weights you want
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chanda Phelan Portfolio", // <-- Tab title
  description: "Portfolio site for Chanda Phelan Kane, HCI researcher and data scientist.", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${spectral.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
