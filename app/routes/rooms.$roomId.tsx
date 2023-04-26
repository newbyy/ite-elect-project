import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData, useNavigation } from "@remix-run/react" 
import { Loading, RoomNav } from "~/components";
import data from "~/data/roomsdata";
 

export async function loader ({ params }: LoaderArgs) {
    const { roomId } = params
    const room = data.find(room => room.roomid == roomId)
    return room
}

export default function Room() {
    const data = useLoaderData<typeof loader>();
    const navigation = useNavigation(); 
        
    if(navigation.state === 'loading') return <Loading />

    return (
        <div className="transition-all top-auto flex flex-col pb-5 md:px-5 overflow-auto sm:scroll-pt-4">
            <h1 className="poppins text-center text-3xl py-5  md:text-4xl md:self-start">{data.room}</h1>
            <div 
                className=" 
                    relative 
                    sm:mx-5 
                    overflow-hidden  
                    z-50   
                    md:min-w-[550px] 
                    h-[250px] 
                    min-w-[305px] 
                    sm:w-[500px] 
                    self-center 
                    shadow-md 
                    shadow-slate-600 
                    md:min-h-[250px]
                    md:h-[350px]
                    lg:min-w-[800px] 
                    lg:min-h-[450px]
                "
            >
                <img
                    className="absolute h-full w-full object-cover "
                    src={data.path}
                    alt={data.room}
                />
            </div>
            <div className="flex justify-between self-center min-w-[305px]  mt-3 h-auto py-1 items-center  sm:w-[500px] md:self-center md:min-w-[550px] lg:min-w-[800px] lg:text-2xl">
                <p className="text-slate-400">Rating: <span className="text-black">{data.rating}</span></p>
                <p className="text-lg">₱ {data.price} / night</p>
            </div>
            <div className="sm:mx-5 md  mt-2 self-center w-[310px] sm:w-[500px] md:self-center md:min-w-[550px] lg:min-w-[800px]">
                <blockquote className="poppins text-sm text-justify first-letter:pl-5 lg:text-2xl flex-wrap pb-10">
                    {data.desc}
                </blockquote>
            </div>
        </div>
    )
}
