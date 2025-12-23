/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Download(id: any) {

  const onButtonClick = () => {
    const pdfUrl = `/vues-dici-${id.id}.pdf`;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `/vues-dici-${id.id}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <button onClick={onButtonClick} className="categoryLink">
        Télécharger le PDF
      </button>
    </>
  );
}
