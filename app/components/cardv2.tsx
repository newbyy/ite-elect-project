import type { Data } from "~/data/roomsdata";

interface cardProps extends Data { 
    handleClick: (props: Data) => void
}

export default function Cardv2({path, room, price, desc, handleClick, rating}: cardProps) {
    return (
        <div 
            onClick={() => handleClick({path, room, price, desc, rating})} 
            className='shadow-[#86b9c5] relative group hover:cursor-pointer overflow-hidden min-w-[300px] sm:mx-12 mx-4 h-[350px] sm:h-[500px] md:mx-16 my-16 md:min-w-[400px] text-white flex justify-center items-center shadow-md   hover:shadow-[#0d333c] rounded-2xl transition-all duration-700'
        >
            <img alt={room}  src={path} className="h-full w-full object-cover group-hover:scale-125 duration-500 transition-all " />
 
            <div className="absolute py-6 flex group-hover:opacity-100 transition-all duration-700 opacity-0 justify-between items-center bottom-0 bg-black bg-opacity-40 w-full p-3">
                <h1 className="text-3xl">{room}</h1> 
                <h1>$ {price} <span className="text-sm text-slate-400">/ night</span></h1>
            </div>
        </div>
    )
}
