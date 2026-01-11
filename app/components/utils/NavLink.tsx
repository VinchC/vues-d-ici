import Link from "next/link";

export const NavLink = (props: { href: string; title: string }) => {
  return (
    <Link href={props.href} className="md:text-sm">
      {props.title}
    </Link>
  );
};
