import Link from "next/link";

export default function ReadLink({ href }: { href: string }) {
  return (
    <Link href={href} className="readLink bg-gray-600 hover:bg-gray-600/60">
      Lire
    </Link>
  );
}
