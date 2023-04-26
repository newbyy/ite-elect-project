import React from 'react'

export default function loading() {
    return (
        <div className=' md:h-full w-full flex  items-center justify-center'>
            <div className='h-20 w-20 bg-gradient-to-br from-[#22A5C2] animate-spin to-white p-2 rounded-full '>
                <div className='h-full w-full bg-white rounded-full'></div>
            </div>
        </div>
    )
}
