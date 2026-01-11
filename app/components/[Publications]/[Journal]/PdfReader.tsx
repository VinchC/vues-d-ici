import { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/TextLayer.css';
import Button from "../../utils/Button";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const options = {
  cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PdfReader(id: any) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [file, setFile] = useState<string>("")
  const onButtonClick = () => {
    const pdfUrl = `/vues-dici-${id.id}.pdf`;
    setFile(pdfUrl)
  };

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <>
      <Button
        title={"Lire le PDF"}
        type={"button"}
        style={"cta yellowBG"}
        click={onButtonClick}
      />
      {file ? (
        <div>
          <Document renderMode="canvas" options={options} file={file} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
