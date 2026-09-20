import { use } from "react";
import type { dataType } from "../type/dataType";
import CardDesign from "./CardDesign";

const Cards = ({ 
    cardDataPromise ,
    technology,
    addToStack   } :{
        cardDataPromise : Promise<dataType[]>;
        technology : dataType[] ;
        addToStack : (card : dataType) => void ;
    }) => {

    const allCards = use(cardDataPromise);
    
    return (
        
        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-10 gap-x-15 mt-20 space-y-4">
            {allCards.length === 0 ? 
            (<p>No Cards Found</p>) :  (allCards.map((card) => (
                <CardDesign key={card.id} card = {card}  addToStack={addToStack}
                isSelected = {technology.some((item) => item.id === card.id )} ></CardDesign>
            ) ))
            }
           
        </div>
    );
};

export default Cards;