import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import ButtomNavbar from "@/components/common/ButtomNavbar";
import Footer from "@/components/common/Footer";
// import Providers from "@/libs/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Shop",
  description: "Verious product sale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <Providers>
      <html lang="en">
        <body className={`${inter.className} body`}>
          <Navbar />
          <ButtomNavbar />
          {children}
          <Footer />
        </body>
      </html>
    // </Providers>
  );
}
