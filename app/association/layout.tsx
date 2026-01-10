import { Metadata } from "next";

export const metadata: Metadata = {
  title: "L'association",
};

export default function AssociationPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
