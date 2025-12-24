import Link from "next/link";

export default function BackToHomeLink() {
  return (
    <div className="link-container">
      <Link
        href="/"
        className="bg-yellow-300 hover:bg-yellow-300/60 text-black p-2 rounded-xl text-center"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
