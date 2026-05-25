"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// ✅ Worker local compatible Next.js
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

type Props = {
  fileUrl: string;
  buttonLabel?: string;
};

export default function PdfModalViewer({
  fileUrl,
  buttonLabel = "Voir le PDF",
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [numPages, setNumPages] = useState(0);

  function onDocumentLoadSuccess({
    numPages,
  }: {
    numPages: number;
  }) {
    setNumPages(numPages);
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        {buttonLabel}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 p-4">
          <div className="mx-auto h-full max-w-5xl overflow-auto rounded bg-white p-4">

            <button
              onClick={() => setIsOpen(false)}
              className="mb-4 rounded bg-red-500 px-3 py-1 text-white"
            >
              Fermer
            </button>

            <Document
              file={fileUrl}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {Array.from(
                new Array(numPages),
                (_, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    width={800}
                  />
                )
              )}
            </Document>
          </div>
        </div>
      )}
    </>
  );
}