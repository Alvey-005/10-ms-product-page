import { useState } from "react";
import { Accordion, AccordionItem, AccordionSummry, AccordionProvider } from "./AccordionCompound";
import parse from "html-react-parser";

type Item = {
  title: string;
  description: string;
};

type Props = {
  itemArray: Item[];
};

const AccordionHolder = ({ itemArray }: Props) => {
  const [showFullArray, setShowFullArray] = useState(false);
  const handleClick = () => setShowFullArray(!showFullArray);

  const displayedItems = showFullArray ? itemArray : itemArray.slice(0, 5);

  return (
    <div className="relative border border-slate-400 rounded-md p-4">
      <div className="text-left text-black">
        <AccordionProvider>
          <Accordion>
            {displayedItems.map((item, idx) => (
              <AccordionItem key={idx}>
                <AccordionSummry className="text-black">{parse(item.title)}</AccordionSummry>
                <span>{parse(item.description)}</span>
              </AccordionItem>
            ))}
          </Accordion>
        </AccordionProvider>
      </div>
      {itemArray.length > 5 && (
        <button className="absolute left-1/2 transform -translate-x-1/2 bottom-[-15px] items-center gap-2 rounded-full bg-white px-4 py-1 text-sm text-gray-500 shadow-[0px_0px_17.0361px_#E7EAF7] hover:bg-gray-50 hover:text-gray-700" onClick={handleClick}>
        {showFullArray ? "Show less" : "Show All"}
      </button>
      )}
      
    </div>
  );
};

export default AccordionHolder;
