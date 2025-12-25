/* eslint-disable @next/next/no-img-element */

import { ARTICLES, JOURNALS } from "@/data/data";
import Link from "next/link";

const publications = ARTICLES.concat(JOURNALS);

console.log(publications);

type Publication = {
  id: number;
  title: string;
  link: string;
};

type PublicationListProps = {
  publications: Publication[];
  id: number;
  handleProductClick: (publication: Publication) => void;
};

const ProductList: React.FC<PublicationListProps> = ({
  publications,
  id,
  handleProductClick,
}) => {
  return (
    <div className="bg-white max-h-48 resultProductContainer">
      {publications.map((publication, index) => (
        <Link
          key={publication.id}
          href={`publications/${publication.link}${publication.id}`}
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

export default ProductList;
