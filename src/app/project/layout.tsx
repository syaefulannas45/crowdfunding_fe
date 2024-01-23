import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Detail",
};

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
