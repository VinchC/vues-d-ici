import { Publication } from "@/app/types";
import Link from "next/link";

type PublicationListProps = {
  publications: Publication[];
  id: number;
  handleProductClick: (publication: Publication) => void;
};

const ResultList: React.FC<PublicationListProps> = ({
  publications,
  id,
  handleProductClick,
}) => {
  return (
    <div className="bg-gray-200 resultContainer border-2 border-purple-500 rounded-md px-4 py-1 shadow-sm focus:outline-none">
      {publications.map((publication, index) => (
        <Link
          key={publication.id}
          href={`/publications/${publication.link}${publication.id}`}
          id={`product-${index}`}
          className={`py-2 px-4 flex items-center justify-between gap-8 hover:bg-gray-200 cursor-pointer ${
            id === index ? "bg-gray-500 " : ""
          }`}
          onClick={() => handleProductClick(publication)}
        >
          <p className="font-medium">{publication.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default ResultList;
