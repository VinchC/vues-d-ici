import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nous contacter",
};

export default function AssociationPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main id="maincontent">{children}</main>;
}
