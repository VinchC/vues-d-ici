import { JournalProps } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

export const JournalCard = (props: JournalProps) => {
  return (
    <div className="articleCard">
      <Image
        src={props.picture}
        alt={props.alt}
        width="20"
        height="20"
        className="flex items-center max-w-80 max-h-180 rounded-t-lg"
      />
      <div className="px-4">
        <h3 className="text-base font-semibold">{props.title}</h3>
        <p className="text-sm spacing line-clamp-3">{props.chapeau}</p>
        <div className="flex justify-between items-center">
          <Link href={`/journals/${props.id}`} className="mediumButton">
            Lire le journal
          </Link>
        </div>
      </div>
    </div>
  );
};
