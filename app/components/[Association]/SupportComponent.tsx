import { AssociationProps } from "@/app/types";
import Membership from "./Membership";
import MainLink from "../utils/MainLink";

export default function SupportComponent(props: AssociationProps) {
  return (
    <div className="flex flex-col justify-around p-4 rounded-xl border-2 h-88 max-md:h-76 mb-4">
      <h3>{props.title}</h3>
      <p className="text-xs">{props.text}</p>
      {props.textButton == "Faire un don" ? (
        <MainLink
          title={props.textButton}
          href={
            "https://www.helloasso.com/associations/quartier-vu-d-ici-19-20/collectes/prochain-numero-de-vues-d-ici-nous-avons-besoin-de-vous"
          }
        />
      ) : (
        <Membership />
      )}
    </div>
  );
}
