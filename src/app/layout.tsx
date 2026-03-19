import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/website/template/Header";
import Footer from "@/components/website/template/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orak Promo - ofertas e cupons de descontos",
  description:
    "Orak promo é uma plataforma de que contém um catálogo de grupos de ofertas de vários tipos de produtos e serviços, garimpamos as melhores e mais confiáveis ofertas para você economizar de verdade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <TooltipProvider>{children}</TooltipProvider>
        <Footer />
      </body>
    </html>
  );
}
