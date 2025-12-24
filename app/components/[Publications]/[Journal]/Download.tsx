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
      <button onClick={onButtonClick} className="bg-blue-500 text-black text-md text-center w-40 max-sm:w-32 max-sm:text-sm py-1 h-8 border-2 border-gray-500 hover:bg-blue-500/60 rounded-lg">
        Télécharger le PDF
      </button>
    </>
  );
}
