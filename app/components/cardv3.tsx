import React from "react";
import { Data } from "~/data/roomsdata";

interface props extends Data {
    handleClick: (e: React.MouseEvent<HTMLDivElement>, roomid: string) => void
}

export default function cardv3({ desc, path, price, rating, room, roomid, handleClick }:props) {
    return (
        <div 
            key={roomid}
            className="
                relative
                overflow-hidden
                min-h-[380px]
                min-w-[300px]
                shadow-2xl
                shadow-slate-500
                bg-white
                rounded-2xl 
                group
                hover:cursor-pointer
                snap-center  
                md:mt-16
                pb-16
                lg:h-[600px]
                lg:w-[550px]
            "
            onClick={(e) => handleClick(e, roomid)}
        >
            <div className="h-full w-full bg-black z-20 absolute bg-opacity-50" />
            <img
                src={path}
                className="absolute h-full w-full object-cover"
                alt={room}
            />
            <div className="absolute w-full h-full z-30 flex items-center  flex-col justify-center opacity-50 group-hover:opacity-90 transition-all group-hover:transition-all  ">
                <h1 className="text-5xl text-white ">{room}</h1>
                <h1 className="text-lg text-white hidden group-hover:block transition-all duration-500">Click to view info</h1>
            </div>
        </div>
    )
}
