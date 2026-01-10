import Link from "next/link";

export default function OutLink({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <Link
      target="_blank"
      href={href}
      className="cta bg-red-500 hover:bg-red-500/60"
    >
      {title}
    </Link>
  );
}
