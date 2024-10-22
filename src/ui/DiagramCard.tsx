import { FC } from "react";
import { Link } from "react-router-dom";

interface ICardProps {
  name: string;
  img: string;
  url: string
}

export const DiagramCard: FC<ICardProps> = ({ name, img, url }) => {
  return (
    <Link to={url}>
      <figure className="max-w-44 cursor-pointer rounded-2xl bg-white p-2 shadow-lg transition-transform hover:scale-105">
        <img src={img} alt="histogram" className="rounded-t-2xl" />
        <figcaption className="text-sm">{name}</figcaption>
      </figure>
    </Link>
  );
};
