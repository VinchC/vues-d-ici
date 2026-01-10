import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vues d'ici | Article",
};

export default function ArticleDetailPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
