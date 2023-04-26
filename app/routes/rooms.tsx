 
import data from '~/data/roomsdata'; 
import { Outlet, useLoaderData, Link, useLocation } from '@remix-run/react'; 
import { Menu, Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { RoomNav } from '~/components';

export async function loader () { 
  console.log(data)
  return data
}

export default function Rooms() {
  const data = useLoaderData<typeof loader>();
  const { pathname } = useLocation();  
  
  console.log(data)

  return (
    <div className='flex flex-col md:flex-row transition-all w-screen overflow-y-auto md:overflow-hidden h-[92vh] '>
      <div 
        className='
          transition-all  
          md:border-r-2 
          relative 
          w-screen 
          md:p-0 p-3 
          md:h-screen 
          items-center 
          flex 
          justify-evenly 
          flex-col  
          md:flex-col 
          md:w-3/12  
          md:justify-normal 
        '
      >
        <h1 className='text-xl md:text-2xl font-bold poppins md:w-full md:text-center md:pt-8  mb-3 md:mb-0 lg:text-4xl'>Rooms Offer: </h1>
        {/* MOBILE */}  
        <RoomNav />
        {/* LAPTOP */}
        <div className=' hidden md:flex md:flex-col  w-full h-full md:py-5 transition-all md:min-w-[150px] pb-24 '>
          {data.map((room) => (
            <Link 
              key={room.path} 
              className={`last:mb-24 first:mt-0 text-xl py-5 lg:text-2xl text-center ${pathname.includes(room.roomid) ? 'bg-[#22A5C2] text-white hover:text-[#22A5C2]' : ' '} hover:bg-slate-200 `} 
              to={room.roomid}
            > 
              {room.room}
            </Link>
          ))}
        </div>
      </div>
      <div className='transition-all w-screen md:h-screen lg:w-screen md:overflow-y-scroll md:py-5'>
        <Outlet />
      </div>
    </div>
  )
}
