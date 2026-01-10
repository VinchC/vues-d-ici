import Button from "../utils/Button";

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
      <Button
        click={onButtonClick}
        type={"button"}
        title={"Télécharger le bulletin"}
        style={"cta bg-yellow-300 hover:bg-yellow-300/60"}
      />
    </>
  );
}
