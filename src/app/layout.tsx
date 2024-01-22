"use client"
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // List halaman yang tidak menampilkan Navbar dan Footer
  const pagesWithoutNavAndFooter = ["/login", "/register"];

  // Cek apakah halaman saat ini termasuk dalam list di atas
  const hideNavAndFooter = pagesWithoutNavAndFooter.includes(pathname);
  return (
    <html lang="en">
      <body className={poppins.className}>
        {!hideNavAndFooter && <Navbar />}
        {children}
        {!hideNavAndFooter && <Footer />}
      </body>
    </html>
  );
}
