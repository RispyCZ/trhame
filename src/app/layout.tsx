import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const poppins = Poppins({ subsets: ["latin", "latin-ext"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
export const metadata: Metadata = {
  title: "Trhame.cz",
  description: "Nadjdi samozběry ve tvém okolí",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
