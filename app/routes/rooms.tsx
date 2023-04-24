import React, { useState } from 'react'
import Cardv2 from '../components/cardv2';
import data from '~/data/roomsdata';
import type{ Data }  from '~/data/roomsdata';

export default function Rooms() {
 
  const [img, setImg] = useState(false);
  const [imgPath, setImgPath] = useState<Data>();


  const handleClick = (props: Data) => { 
    setImgPath(props)
    setImg(true)
  }
  console.log(imgPath)
  
  return (
    <section className='w-screen md:px-5 bg-[#0C697E] bg-opacity-5 h-[92vh] overflow-hidden pb-5 sm:pb-10 relative'>
       {img &&
         
        <div className='absolute h-screen w-screen flex justify-center items-center  z-50 left-0'>
          <div className='absolute text-slate-400 z-30 top-2 right-5 hover:text-white cursor-pointer ' onClick={() => setImg(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div className='z-50 bg-white py-6 px-5 h-[80vh] sm:h-[450px] relative flex flex-col w-11/12 sm:flex-row sm:w-9/12 justify-evenly ' >  
            <div className='w-full sm:w-6/12  sm:min-h-[300px] min-h-[50vh] p-1  relative overflow-hidden  ' > 
              <h1 className='text-3xl mb-2'>{imgPath?.room}</h1>
              <img src={imgPath?.path} alt={imgPath?.room} className='h-full w-full absolute object-cover ' />
              <div className='absolute bottom-0 right-0 px-5 py-2 text-2xl bg-white bg-opacity-70 text-slate-800 font-extrabold' >$ {imgPath?.price}</div>
            </div>
            <div className='w-full sm:w-6/12 py-6 px-5 mt-6 overflow-y-scroll mt-5 sm:mt-0 '>
              <div className='flex  sm:py-4 sm:pr-4 justify-between'>  
                <h1 className='text-xl ' >Description</h1>
                <p className='text-slate-700'>Rating:  {imgPath?.rating}</p>
              </div>
              <p className='px-4 text-justify flex-wrap'>{imgPath?.desc}</p> 
            </div>
          </div>
          <div className='absolute h-full w-full bg-opacity-60 bg-slate-800 z-10 ' onClick={() => setImg(false)} />
        </div> 
       }


      <h1 className='text-3xl mt-10 text-center text-[#3c5256] font-bold tracking-widest '>Rooms Offer</h1>
      <div className='flex w-full h-full px-2 overflow-x-clip md:pb-4 justify-center items-start  '>
          <div className='w-[98%] md:pl-[1700px] md:pr-32 h-full md:overflow-x-scroll overflow-y-scroll md:overflow-y-hidden md:flex justify-center items-center mt-2 pb-2 '> 
              {data.map(({desc, price, rating, path, room}) => (
                <Cardv2 key={room} path={path} desc={desc} price={price} handleClick={handleClick} rating={rating} room={room} />
              ))}
          </div> 
      </div>
 
    </section>
  )
}
