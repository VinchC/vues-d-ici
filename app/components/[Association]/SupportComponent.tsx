import { AssociationProps } from "@/app/types";
import Link from "next/link";
import Membership from "./Membership";

export default function SupportComponent(props: AssociationProps) {
  return (
    <div className="flex flex-col justify-around p-4 rounded-xl border-2 h-88 max-md:h-76 mb-4">
      <h3>{props.title}</h3>
      <p className="text-xs">{props.text}</p>
      {props.textButton == "Faire un don" ? (
        <Link
          target="_blank"
          href="https://www.helloasso.com/associations/quartier-vu-d-ici-19-20/collectes/prochain-numero-de-vues-d-ici-nous-avons-besoin-de-vous"
          className="cta bg-yellow-300 hover:bg-yellow-300/60 border-white"
        >
          {props.textButton}
        </Link>
      ) : (
        <Membership />
      )}
    </div>
  );
}
