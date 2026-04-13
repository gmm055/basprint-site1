import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Basprint",
  description: "Полиграфия для бизнеса и частных клиентов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}