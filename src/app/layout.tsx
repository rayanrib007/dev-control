import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CHeaderDefault from "@/components/header/CHeaderDefault";
import ProviderAuth from "@/components/providers/providerAuth";
import { ModalProvider } from "@/providers/modal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Controle - Seu sistema de gerenciamento.",
  description: "Gerencie seus clientes e atendimentos de forma fácil!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ProviderAuth>
          <ModalProvider>
            <CHeaderDefault />
            {children}
          </ModalProvider>
        </ProviderAuth>
      </body>
    </html>
  );
}
