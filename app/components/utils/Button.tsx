export default function Button({
  title,
  type,
}: //   className,
{
  title: string;
  type: "submit" | "reset" | "button" | undefined;
  //   className: string;
}) {
  return (
    <button type={type} className="cta bg-blue-300 hover:bg-blue-300/60">
      {title}
    </button>
  );
}
