export default function Membership() {
  const onButtonClick = () => {
    const pdfUrl = "bulletin.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "/bulletin.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <button onClick={onButtonClick} className="bg-gray-500 p-2 rounded-xl w-48 text-center">
        Télécharger le bulletin
      </button>
    </>
  );
}
