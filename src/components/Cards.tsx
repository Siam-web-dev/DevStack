import { use } from "react";
import type { dataType } from "../type/dataType";
import CardDesign from "./CardDesign";

const Cards = ({ cardDataPromise  } : {cardDataPromise : Promise<dataType[]>}) => {

    const allCards = use(cardDataPromise);
    console.log( "All cards" , allCards );
    return (
        
        <div className="col-span-3 grid grid-cols-3 gap-10 gap-x-15 mt-20 space-y-4">
            {allCards.length === 0 ? 
            (<p>No Cards Found</p>) :  (allCards.map((card) => (
                <CardDesign key={card.id} card = {card}></CardDesign>
            ) ))
            }
           
        </div>
    );
};

export default Cards;