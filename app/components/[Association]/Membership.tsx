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
      <button
        onClick={onButtonClick}
        className="cta bg-yellow-300 hover:bg-yellow-300/60"
      >
        Télécharger le bulletin
      </button>
    </>
  );
}
