import { useLoaderData, useNavigate } from '@remix-run/react' 
import data from '~/data/roomsdata'
import type { Data } from '~/data/roomsdata' 
import { redirect } from '@remix-run/node'; 
import React, { MouseEventHandler } from 'react';
import { Cardv3 } from '~/components';

export async function loader() { 
    return data
} 


export default function Room() {
    const data = useLoaderData<typeof loader>();
    const navigation = useNavigate()

    const handleRedirect = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
        console.log("clicked! ", id)
        return navigation(`/rooms/${id}`)
    }
    /* <div className=" mt-[70px]  z-10 overflow-x-hidden overflow-y-scroll  h-[92vh] md:h-screen "> */

    const firstThree = data.filter((data, index) => index < 3)
    console.log(firstThree)
    const secontThree = data.filter((data, index) => index >= 3)
    console.log(secontThree)
    return (
        <div 
            className=' 
                py-5
                w-screen 
                bg-slate-400 
                flex 
                flex-col 
                justify-center 
                items-center
                gap-y-5
                overflow-y-scroll
                first:pt-10
                snap-mandatory 
                snap-x
            '
        >
            {data.map(({path, rating, roomid, room, desc, price }:Data) => (
                <Cardv3 
                    key={roomid}
                    handleClick={handleRedirect}
                    desc={desc}
                    path={path}
                    price={price}
                    room={room}
                    rating={rating}
                    roomid={roomid}
                />
            ))}
        </div>
    )
} 