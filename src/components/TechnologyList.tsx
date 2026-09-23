import { MdOutlineDeleteForever } from "react-icons/md";
import type { dataType } from "../type/dataType";



const TechnologyList = ( {
    technology , 
    removeStack ,
    removeAll 
} : {
    technology : dataType[] ;
    removeStack : (id : number | string) => void ;
    removeAll : () => void
} ) => {

    return (
        <div className=" p-4 h-fit w-full">
            <h1 className="font-semibold text-2xl">Your Stack</h1>
            {technology.length === 0 ? ( <p className="text-[#64748B] text-sm mt-3 mb-3">No technology selected yet</p> ) : (<p className="text-[#64748B] text-sm mt-3 mb-3">{technology.length} Technology Selected</p>) }

            <div className="space-y-2">
                {technology.length === 0 ? (
                    <p className="text-sm text-[#64748B] text-center mt-15 "> Your stack is empty</p>
                ) : (
                    technology.map((item) => (
                        <div key={item.id} className="flex items-center justify-between border-[#8B5CF6] border-2 rounded-lg px-3 py-2">
                            <div className="flex gap-5">
                                <img src={item.icon} alt="" className="w-5 h-auto" />
                            <div>
                                <p className="text-sm font-medium">{item.name}</p>
                                <p className="text-xs text-[#64748B]">{item.category}</p>
                            </div>
                            </div>
                        <button onClick={ () => removeStack(item.id)} className="text-red-700 text-lg" >
                            <MdOutlineDeleteForever></MdOutlineDeleteForever>
                            
                        </button>
                        </div>
                    ))
                )}
            </div>
             {technology.length > 0 && (
        <button
          onClick={removeAll}
          className="mt-4 w-full text-red-500 font-semibold border border-red-500 rounded-lg py-2 text-sm"
        >
          Remove All
        </button>
      )}
        </div>
    );
};

export default TechnologyList;