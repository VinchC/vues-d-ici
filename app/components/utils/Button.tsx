import { MouseEventHandler } from "react";

export default function Button({
  title,
  type,
  style,
  click,
}: {
  title: string;
  type: "submit" | "reset" | "button" | undefined;
  style: string;
  click?: MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  return (
    <button type={type} className={style} onClick={click}>
      {title}
    </button>
  );
}
