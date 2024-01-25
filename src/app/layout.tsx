import { Poppins } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { Footer, Navbar } from "@/components";
import { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Backer Crowdfunding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StoreProvider>
          <Navbar />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
