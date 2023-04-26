import { Menu, Transition } from "@headlessui/react"
import { Link } from "@remix-run/react"
import { Fragment  } from "react"
import data from "~/data/roomsdata"

export default function roomsnav() {
    return (
      <Menu as='div' className='relative overflow-visible md:hidden'>
          <Menu.Button className='bg-[#22A5C2] flex items-center px-4 py-1 gap-x-2 z-40'>
            <span className='text-lg text-white'>Choose Room</span> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </Menu.Button>
          <Transition
            enter="transition duration-500 ease-out"
            enterFrom="transform  -translate-y-5 opacity-90"
            enterTo="transform translate-y-0 opacity-100 "
          >
            <Menu.Items className="h-auto transition-all z-30" >
              <Menu.Item>
                {({close}) => (
                <div className="flex flex-col  h-auto bg-[#22A5C2] text-white bg-opacity-80 transition-all">
                    {data.map(({roomid, room}: {roomid: string, room: string}) => (
                      <Link key={roomid} to={roomid} className='px-3 py-3' onClick={() => close()}>
                        {room}
                      </Link>
                    ))}
                  </div>  
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
    )
}
