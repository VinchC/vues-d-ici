import Button from "../utils/Button";

export default function Report() {
  const onButtonClick = () => {
    const pdfUrl = "report_2025.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "/report_2025.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <Button
        click={onButtonClick}
        type={"button"}
        title={"Télécharger le rapport"}
        style={"cta yellowBG"}
      />
    </>
  );
}
