import type { Metadata } from "next";
import { Root } from "@/components";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Alan Reis Anjos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><Root>{children}</Root></body>
    </html>
  );
}
