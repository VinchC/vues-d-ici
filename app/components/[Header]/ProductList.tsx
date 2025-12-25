/* eslint-disable @next/next/no-img-element */

import { ARTICLES, JOURNALS } from "@/data/data";

const publications = ARTICLES.concat(JOURNALS);

console.log(publications);

type Publication = {
  id: number;
  title: string;
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
    <div className="bg-white max-h-96 overflow-y-scroll resultProductContainer">
      {publications.map((publication, index) => (
        <div
          key={publication.id}
          id={`product-${index}`}
          className={`py-2 px-4 flex items-center justify-between gap-8 hover:bg-gray-200 cursor-pointer ${
            id === index ? "bg-gray-200 " : ""
          }`}
          onClick={() => handleProductClick(publication)}
        >
          <p className="font-medium">{publication.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
