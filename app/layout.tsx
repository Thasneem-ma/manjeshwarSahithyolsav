import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from '@/components/Footer.jsx'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meenja Sector Sahithyolsav",
  description: "India's Largest Chain Event",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Toaster position="top-center" reverseOrder={false} />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
