import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import React, { Fragment, useState } from 'react'
import data from '~/data/spadata';

interface props {
    modal: boolean;
    handleModal: () => void; 
}



export default function Modal({ modal, handleModal } : props) {
    const [price, setPrice] = useState(0);
    const [val, setVal] = useState(''); 

    return (
        <div className={`w-screen h-screen m-0 absolute transition-all z-30 ${modal ? ' flex' : 'hidden'}`}>
            <div className='w-full h-full relative z-40 flex justify-center items-center'>
                <div className='w-full absolute h-full z-40 bg-black bg-opacity-90' onClick={handleModal}></div>
                <div className='w-[80%] p-3 h-[60%] md:p-5 md:w-2/6 md:h-3/6  absolute z-50 bg-white overflow-hidden '> 
                    <form className='w-full  h-full '
                        onSubmit={(e) => {
                            e.preventDefault();
                            console.log(e)
                        }}
                    > 
                        <div className='flex flex-col h-full overflow-y-scroll gap-y-3 pb-5  pr-3   '> 
                            <h1 className='text-lg poppins text-center'>Book Spa Service </h1>
                            <div className='spacing-y-2'>
                                <label htmlFor='#select' className='after:content-["*"] after:pl-1 after:text-red-600'>Type:</label>
                                <Listbox value={val} onChange={setVal} name='type' >
                                    <Listbox.Button id="select" className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                        <span className="block truncate">{val ? val : 'Select'}</span>
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <ChevronUpDownIcon
                                            className="h-5 w-5 text-gray-400 "
                                            aria-hidden="true"
                                        />
                                        </span>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment}
                                        enterFrom='opacity-0 -translate-x-4'
                                        enterTo='opacity-100 translate-x-0 '
                                        enter='transition ease-in duration-300'
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100 translate-x-0"
                                        leaveTo="opacity-0 translate-x-4"> 
                                        <Listbox.Options >
                                            {data.map((dataa, index) => { 
                                                return(
                                                    <Listbox.Option
                                                        onClick={() => setPrice(dataa.price)}
                                                        key={index}
                                                        className={({ active }) =>
                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                            active ? 'bg-[#22A5C2] text-white' : 'text-gray-900'
                                                        }`
                                                        }
                                                        value={dataa.type}
                                                    >
                                                        {({ selected }) => {
                                                            return (
                                                            <>
                                                                <span
                                                                    className={`block truncate ${
                                                                        selected ? 'font-medium' : 'font-normal'
                                                                    }`}
                                                                >
                                                                    {dataa.type}
                                                                </span>
                                                                {selected ? (
                                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white]">
                                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                    </span>
                                                                ) : null}
                                                            </>
                                                        )}}
                                                    </Listbox.Option>
                                                )})}
                                        </Listbox.Options>
                                    </Transition> 
                                </Listbox>
                            </div>
                            <hr />
                            <div className='flex my-2 justify-between w-full '>
                                <label className=''>Price</label> 
                                {/* <input className='w-12' /> */}
                                <div className='flex justify-evenly'>
                                    <span>₱</span>
                                    <input disabled value={price} className='before:content-["₱"]  w-16 text-center ' />
                                    <span>/hr</span>
                                </div>
                            </div>
                            <hr />
                            <div className='flex flex-col space-y-2'>
                                <label htmlFor='name' className='after:content-["*"] after:pl-1 after:text-red-600'>Name</label>
                                <input type='text' id="name" className='border w-full p-2 focus:outline-[#22A5C2]' placeholder='John Doe' />
                            </div>  
                            <hr />
                            <div className='flex flex-col space-y-2'>
                                <label htmlFor='email' className='after:content-["*"] after:pl-1 after:text-red-600'>Email</label>
                                <input  pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" id="email"  className='border numb w-full p-2 focus:outline-[#22A5C2] focus:appearance-none' placeholder='example@email.com'  />
                            </div>  
                            <button className='text-white p-2 bg-[#22A5C2]' type='submit'>Book</button>
                            <button className='text-white p-2 bg-slate-600' onClick={handleModal}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
