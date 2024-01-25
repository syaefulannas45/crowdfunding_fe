// "use client"
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { usePathname } from "next/navigation";
import StoreProvider from "./StoreProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const pathname = usePathname();

  // const pagesWithoutNavAndFooter = [
  //   "/login",
  //   "/register",
  //   "/register/upload",
  //   "/register/success",
  //   "/project",
  //   "/project/fund-success",
  //   "/dashboard",
  //   "/dashboard/create",
  //   "/dashboard/transactions",
  //   "/dashboard/detail",
  // ];

  // const hideNavAndFooter = pagesWithoutNavAndFooter.includes(pathname);
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StoreProvider>
          {/* {!hideNavAndFooter && <Navbar />} */}
          {children}
          {/* {!hideNavAndFooter && <Footer />} */}
        </StoreProvider>
      </body>
    </html>
  );
}
