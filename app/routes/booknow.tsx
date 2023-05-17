import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import React, { Fragment, useState } from "react";
import data from "~/data/roomsdata";


export default function Booknow() {
    const [selectedRoom, setSelectedRoom] = useState('Select...');
    const [imgpath, setimgpath] = useState('');
    let phdate = new Date();
    let date = new Date().getDate(); 
    phdate.setDate(date + 1);
    const [checkin, setCheckin] = useState(phdate.toISOString().split('T')[0]);
    const [checkOut, setCheckOut] = useState<string>();
    const [toast, setToast] = useState(false); 


  /*   const handleCheckin = (e: React.ChangeEvent<HTMLDataElement>) => {
        const cDate = new Date();
        const checkoutDate = Number(e.target.value.split('-')[2]) + 1;
        cDate.setDate(checkoutDate);
        console.log("sub", cDate.toISOString());
        console.log("asdsadas", cDate.toISOString().split("T")[0])
        setCheckin(e.target.value); 
        setCheckOut(cDate.toISOString().split("T")[0]); 
    }  */

    return (
        <>
            <div className={`z-[99] transition-all ${toast ? 'opacity-100' : 'opacity-0'} absolute top-24 right-5 rounded-lg text-white bg-[#22A5C2] px-5 py-3 `}>
                Booked Success!
            </div>
            <div 
                className="
                    w-full
                    h-full
                    flex 
                    justify-center
                    items-center
                    overflow-hidden
                "
            > 
                    <div className="w-full relative h-full hidden md:flex items-center justify-center overflow-y-hidden" >
                        {/* */}
                        {imgpath && <h1 className=" text-5xl z-50 absolute top-11 left-5 px-3 py-2 bg-white bg-opacity-70 rounded-xl text-[#0C697E]">{selectedRoom}</h1>}
                        {imgpath ?  
                            <img alt="room" src={imgpath} className="absolute w-full h-full object-cover" /> 
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-52 h-52">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        }

                    </div>
                    <div className="w-full h-full border-l-2 overflow-y-scroll">          
                        <div className="w-full p-5  flex flex-col h-full justify-evenly overflow-y-scroll space-y-5">  
                            <form className="block space-y-5">    
                                <h1 className="text-5xl">Book now</h1> 
                                <div className="block md:flex space-y-5 md:space-y-0 justify-between" >
                                    <div className="flex flex-col space-y-3 justify-start  ">
                                        <label htmlFor="checkin" className="text-2xl after:content-['*'] after:pl-1 after:text-red-600">Checkin</label>    
                                        <input type="date" id="checkin" min={phdate.toISOString().split('T')[0]} className="shadow-lg py-2 rounded-md  px-3 text-2xl"    />
                                    </div>   
                                    <div className="h-full items-center hidden md:flex ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg> 
                                    </div>
                                    <div className="flex flex-col space-y-3 justify-start">
                                        <label htmlFor="checkout" className="text-2xl after:content-['*'] after:pl-1 after:text-red-600">Checkout</label>    
                                        <input type="date" id="checkout" min={phdate.toISOString().split('T')[0]} className="shadow-lg py-2 rounded-md  px-3 text-2xl"   />  
                                    </div>
                                </div>
                                <div className="block space-y-3 text-2xl">
                                    <label>Choose a Room:</label> <br />
                                    <Listbox value={selectedRoom} onChange={setSelectedRoom}>
                                        <Listbox.Button className='text-2xl shadow-md  rounded-md px-3 py-2 flex w-full  justify-between items-center' ><span>{selectedRoom}</span><ChevronUpDownIcon className="h-6 w-6" /></Listbox.Button>
                                        <Listbox.Options className=' text-2xl  space-y-1 p-1 items-center '>
                                            {data.map((room) => (
                                            /* Use the `active` state to conditionally style the active option. */
                                            /* Use the `selected` state to conditionally style the selected option. */
                                            <Listbox.Option key={room.roomid} value={room.room} as="div" className='' onClick={() => setimgpath(room.path)}>
                                                {({ active, selected }) => (
                                                <li
                                                    className={`${
                                                    active ? 'bg-[#0C697E] text-white px-3  py-2' : 'bg-white text-black px-3  py-2'
                                                    } flex justify-between cursor-pointer  border rounded-md items-center`}
                                                >
                                                    <span>{room.room}</span>
                                                    {selected && <CheckIcon className="h-6 w-6  " />}
                                                </li>
                                                )}
                                            </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Listbox> 
                                </div>
                                <div className="block space-y-3 text-2xl ">
                                    <div>How many person:</div>
                                    <select className="w-full shadow-lg px-3 py-2 rounded-lg" >
                                        <option value='1'>1 Person</option>
                                        <option value='2'>2 Person</option>
                                        <option value='3'>3 Person</option>
                                        <option value='4'>4 Person</option>
                                        <option value='5'>5 more Person</option>
                                    </select>
                                </div> 
                            </form>
                            <div className="w-full h-fit  overflow-hidden rounded-lg group hover:shadow-lg ">
                                <button 
                                    className="w-full transition-all rounded-lg px-3 text-2xl  py-2 shadow-lg bg-[#22A5C2] text-white group-hover:scale-125"
                                    onClick={() => {
                                        setToast(true);
                                        setSelectedRoom('Select...');
                                        setimgpath('');
                                        
                                        setTimeout(() => {
                                            setToast(false);
                                        }, 3000);
                                    }}
                                >
                                    Book now
                                </button>
                            </div>
                        </div>
                    </div> 
            </div>
        </>
    )
}
