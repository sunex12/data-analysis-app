import { DiagramCard } from "../ui/DiagramCard";
import { cards } from "./cardsData";

export const DiagramCards = () => {
  return (
    <div className="flex justify-center items-center mt-12">
      <div className="grid grid-cols-3 gap-4 max-w-[500px]">
        {cards.map((card) => (
          <DiagramCard key={card.id} name={card.name} img={card.img} />
        ))}
      </div>
    </div>
  );
};
