import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolioj",
  description: "Portfolio de projetos de desenvolvimento",
};

const fonte = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${fonte.className} antialiased`}>{children}</body>
    </html>
  );
}
