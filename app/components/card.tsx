import React from 'react'

interface cardprops {
    prof: string;
    name: string;
    position: string;    
}


export default function card({prof, name, position}: cardprops) {
    return (
        <div className='w-4/5 sm:w-3/4 md:w-3/12 flex flex-col text-white hover:shadow-xl shadow-white items-center bg-opacity-10 bg-slate-100 relative rounded-xl p-8  transition-all'> 
            <img src={prof} alt={prof} className='h-60 object-cover rounded-full w-60 mb-5 shadow-slate-100 hover:shadow-lg ' />
            <div className='text-center break-words leading-6 tracking-widest '> 
                <h1 className='text-2xl sm:text-3xl'>{name}</h1>
                <h3 className='text-xl'>{position}</h3>
            </div>
        </div>
    )
}
