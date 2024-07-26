import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { FavouriteProvider } from "@/contexts/favourites";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marvel",
  description: "Marvel characters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <FavouriteProvider>
          {children}
        </FavouriteProvider>
      </body>
    </html>
  );
}
