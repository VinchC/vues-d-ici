import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vues d'ici | Journal",
};

export default function JournalDetailPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
