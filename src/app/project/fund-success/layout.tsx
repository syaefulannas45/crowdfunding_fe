import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fund Successfully",
};

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
