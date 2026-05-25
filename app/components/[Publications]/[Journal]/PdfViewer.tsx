/* eslint-disable @typescript-eslint/no-explicit-any */
import dynamic from "next/dynamic";

// Lazy loading du composant PDF
const PdfModalViewer = dynamic(() => import("./PdfModalViewer"), {
  ssr: false,
  loading: () => <p>Chargement du composant PDF...</p>,
});

export default function PdfViewer(id: any) {
  const pdfUrl = `/vues-dici-${id.id}.pdf`;
  return (
    <main className="flex min-h-screen items-center justify-center">
      <PdfModalViewer fileUrl={pdfUrl} buttonLabel="Ouvrir le document" />
    </main>
  );
}
