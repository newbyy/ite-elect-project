import type{ LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import  { useState } from 'react'
import { Cardv2, Modal } from '~/components'
import data from '~/data/spadata'
import type { spa } from '~/data/spadata'  

export async function loader(): Promise<Array<spa>> {
  return data
}

export default function Services() {
  const data = useLoaderData<typeof loader>();
  const [modal, setModal] = useState(false)

  function handleModal() {
    setModal(false);
  }  

  function handleOpen() {
    setModal(true);
  } 

  return (

    <div className={`relative  md:h-screen ${modal ? 'p-0' : 'p-3'} w-screen bg-[#22A5C2] bg-opacity-30 ${modal ? 'h-screen overflow-hidden overflow-y-hidden' : 'h-auto'} `}>
      <Modal handleModal={handleModal} modal={modal} />
      <div className='flex justify-between w-full md:px-10   relative top-10'>  
        <h1 className='text-xl  poppins font-bold md:text-3xl lg:text-5xl'>Spa Services Offer:</h1>
        <button onClick={handleOpen}>Avail Service</button> 
      </div>
      <div 
        className={`
          flex 
          flex-col 
          gap-y-4
          first-letter:
          pb-16 
          px-[2%] 
          md:flex-row 
          md:gap-x-10
          md:overflow-x-scroll
          md:px-[5%]
          md:snap-mandatory 
          md:snap-x 
          md:items-center
          md:h-full 
          md:pb-0
          md:gap-y-0
        `}
      > 
        
        {data.map((spa, index) => (
          <>
            <Cardv2 key={index} desc={spa.desc} price={spa.price} type={spa.type} img={spa.img} />
          </>
        ))}
      </div>
    </div>
  )
}
