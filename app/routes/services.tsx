import type{ LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import React from 'react'
import { Cardv2 } from '~/components'
import data from '~/data/spadata'
import type { spa } from '~/data/spadata'  

export async function loader(): Promise<Array<spa>> {
  return data
}

export default function Services() {
  const data = useLoaderData<typeof loader>();

  return (

    <div className='relative h-auto md:h-screen p-3 w-screen bg-[#22A5C2] bg-opacity-30 '>
      <h1 className='text-xl md:absolute   py-2 poppins font-bold md:text-3xl lg:text-5xl'>Spa Services Offer:</h1> 
      <div 
        className='
          flex 
          flex-col 
          gap-y-4 
          p-2  
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
        '
      > 
        
        {data.map((spa) => (
          <Cardv2 key={spa.id} desc={spa.desc} price={spa.price} type={spa.type} img={spa.img}  />
        ))}
      </div>
    </div>
  )
}
