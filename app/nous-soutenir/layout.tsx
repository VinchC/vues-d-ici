import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nous soutenir",
};

export default function BackUpPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
