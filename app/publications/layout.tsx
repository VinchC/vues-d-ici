import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos articles et journaux",
};

export default function PublicationsPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main id="maincontent">
      {children}
    </main>
  );
}
