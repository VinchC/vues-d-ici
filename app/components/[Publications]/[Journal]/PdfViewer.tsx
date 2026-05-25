"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// import "react-pdf/dist/Page/AnnotationLayer.css";
// import "react-pdf/dist/Page/TextLayer.css";

// Worker PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

type PdfViewerProps = {
  file: string;
};

export default function PdfViewer({ file }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  function onDocumentLoadSuccess({
    numPages,
  }: {
    numPages: number;
  }) {
    setNumPages(numPages);
  }

  return (
    <div>
      {/* Bouton ouverture */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cta redBG mb-4"
      >
        {isOpen ? "Fermer le PDF" : "Voir le PDF"}
      </button>

      {/* Viewer */}
      {isOpen && (
        <div className="mt-4 border p-4 rounded shadow">
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={800} />
          </Document>

          {/* Navigation */}
          <div className="flex gap-4 mt-4 items-center">
            <button
              disabled={pageNumber <= 1}
              onClick={() => setPageNumber(pageNumber - 1)}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              Précédent
            </button>

            <span>
              Page {pageNumber} / {numPages}
            </span>

            <button
              disabled={pageNumber >= (numPages || 1)}
              onClick={() => setPageNumber(pageNumber + 1)}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              Suivant
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
