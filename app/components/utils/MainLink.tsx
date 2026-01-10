import Link from "next/link";

export default function MainLink({
  title,
  href,
  style,
  target,
}: {
  title: string;
  href: string;
  style: string;
  target?: string;
}) 
{
  return (
    <Link href={href} className={style} target={target}>
      {title}
    </Link>
  );
}
