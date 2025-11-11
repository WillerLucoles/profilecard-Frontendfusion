import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Profile Card",
  description: "ProfileCard de Willer Lucoles",
  creator: "Willer Lucoles",  
  keywords:["Profile", "Cards", "React", "Next.js", "Tailwind CSS", "web", "experience", "interface", "designer", "mobile", "ui", "ux"],
  icons: {
    icon: '/FavIcon/favicon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
