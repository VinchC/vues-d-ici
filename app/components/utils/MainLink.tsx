import Link from "next/link";

export default function MainLink({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <Link href={href} className="cta bg-purple-600 hover:bg-purple-600/60">
      {title}
    </Link>
  );
}
