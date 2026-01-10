export default function Button({
  title,
  type,
  style,
}: {
  title: string;
  type: "submit" | "reset" | "button" | undefined;
  style: string;
}) {
  return (
    <button type={type} className={style}>
      {title}
    </button>
  );
}
