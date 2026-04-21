import type { Metadata } from "next";
import { Kanit, Geist_Mono } from "next/font/google";
import "./globals.css";

const kanitSans = Kanit({
  variable: "--font-Kanit-sans",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "chrisnastore",
  description: "chrisnastore",
  icons: {
    icon: "/bow-tie-svgrepo-com.svg",
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
      className={`${kanitSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
