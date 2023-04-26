import type { spa } from "~/data/spadata"; 

export default function Cardv2({desc, img, price, type}: spa) {
    return ( 
        <div 
            className="
                group 
                hover:cursor-pointer 
                transition-all  
                h-[220px] 
                sm:h-[320px]
                rounded-lg 
                relative  
                drop-shadow-[0_5px_3px_rgba(0,0,0,0.5)] 
                flex 
                flex-col 
                md:min-w-[500px]
                overflow-hidden 
                md:snap-center
                md:min-h-[400px]
            "
        >
            <img
                className=" absolute h-full w-full object-cover"
                alt={img}
                src={img}
            /> 
            <div className="h-full w-full bg-black absolute bg-opacity-60 z-10" />
            <div className="absolute h-full w-full text-white z-20 flex items-center justify-center text-3xl flex-col"> 
                <h1 className=" group-hover:hidden px-[10%] font-bold md:text-5xl bg-clip-content ">{type}</h1>
                <h2 className="group-hover:hidden text-base sm:text-lg">₱ {price} <span className="text-slate-300">/ hr</span></h2>
                <p className="group-hover:transition-all group-hover:block hidden flex-wrap text-sm text-center px-[10%] sm:text-base transition-all">{desc}</p>
            </div>
        </div>
    )
}
