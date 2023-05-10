import type { spa } from "~/data/spadata"; 
 

export default function Cardv2({desc, img, price, type}:  spa ) {
    return ( 
        <div  
            className="
                first:mt-16
                group 
                hover:cursor-pointer 
                transition-all 
                md:first:mt-0 
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
            <div className="relative h-full w-full text-white z-20 flex items-center justify-center flex-col"> 
                <div className="absolute flex flex-col justify-center w-full h-full items-center">
                    <h1 className=" group-hover:opacity-0 px-[10%] text-3xl w-full font-bold delay-300 md:text-5xl bg-clip-content text-center duration-500">{type}</h1>
                    <h2 className="group-hover:opacity-0 text-base sm:text-lg duration-500 delay-300">₱ {price} <span className="text-slate-300">/ hr</span></h2>
                </div>
                <p className="group-hover:transition-all duration-500 delay-300 group-hover:opacity-100 opacity-0 flex-wrap text-sm text-center px-[10%] sm:text-base transition-all">{desc}</p>
            </div>
        </div>
    )
}
