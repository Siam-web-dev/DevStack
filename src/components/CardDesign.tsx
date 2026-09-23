
import type { dataType } from "../type/dataType";
import { FaStar } from "react-icons/fa";

const CardDesign = ({
    card ,
    addToStack,
    isSelected
} : {
    card : dataType ;
    addToStack: (card: dataType) => void;
    isSelected: boolean;
}) => {

    return (
        <div className="space-y-5  border-2 p-3 rounded-2xl border-[#8B5CF6] ">
            <div className="flex justify-between">
                <img src={card.icon} alt="" className=" w-10 h-auto " />
                <p className=" text-[#2695c9] "> {card.badge} </p>
            </div>
            <h2 className="text-2xl font-semibold"> {card.name} </h2>
            <p className=" text-[#64748B] "> {card.description} </p>
            {/* Devider */}
            <div className="my-5 border-t border-slate-100"></div>
             <div className=" flex items-center justify-between ">
                <p> {card.category} </p>
                <p className="text-[#64748B]"> {card.difficulty} </p>
                <div className="flex items-center gap-1">
                    <p className="text-yellow-400"> <FaStar></FaStar> </p>
                    <p> {card.rating} </p>
             </div>
            </div>
            <button
            onClick={() => addToStack(card)} 
            disabled = {isSelected}
             className={`text-white w-full rounded-lg py-2 cursor-pointer ${isSelected ? "bg-gray-400 " : "bg-[#0A0F1D]"}`}>

                {isSelected ? "✓ Added to Stack" : "Add to Stack"}
                
                
            </button>

        </div>
    );
};

export default CardDesign;