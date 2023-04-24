import { Link, useLocation } from "@remix-run/react"; 
import { Menu, Transition } from '@headlessui/react'
import { Bars3Icon } from "@heroicons/react/20/solid";
 

export default function Navbar() {

    const { pathname } = useLocation();   
    const links = [
        {
            link: 'Home',
            path: '/'
        },
        {
            link: 'Services',
            path: '/services'
        },
        {
            link: 'Rooms',
            path: '/rooms'
        }, 
    ]; 

    return (
        <nav className="w-screen h-[8vh] flex items-center fixed top-0 bg-[#22A5C2] justify-between px-5 z-50">
            <h1 className="quicksand tracking-widest text-white text-3xl " style={{textShadow: '-2px 2px 3px rgba(0, 0, 0, 0.5)'}}>SpaRe's</h1>

            {/* FOR MD DEVICES */}
            <div className="hidden  sm:flex text-white text-xl sm:gap-x-5 md:gap-x-10 transition-all"> 
                {links.map(({link, path}) => (
                    <Link 
                        className={`poppins hover:underline ${pathname == path ? 'underline' : '' } `}
                        key={path} 
                        to={path}
                    >
                        {link}
                    </Link>
                ))} 
            </div>
            
            {/* MOBILE MENU */}
            <Menu as='div' className='block flex-col sm:hidden relative h-full ' >
                <div className="h-full flex items-center "> 
                    <Menu.Button className="text-white flex text-3xl w-10 active:text-slate-800 transition-all">  
                        <Bars3Icon  />
                    </Menu.Button>
                </div>
                <Transition 
                    enter="transition duration-700 ease-out"
                    enterFrom="transform scale-y-0 opacity-0"
                    enterTo="transform scale-y-100 opacity-100"
                    leave="transition duration-500 ease-out"
                    leaveFrom="transform scale-y-100 opacity-100"
                    leaveTo="transform scale-y-0 opacity-0"
                >
                        <Menu.Items className="bg-[#22A5C2] w-screen -right-5 absolute text-white border-t-[1] border border-x-0 border-b-0 border-cyan-200"> 
                            <div className=" flex flex-col">
                                {links.map((link) => (
                                    <Menu.Item key={link.path}>
                                        {() => (
                                            <Link to={link.path} className={`poppins hover:underline px-5 py-5 ${pathname == link.path ? 'underline' : ''}`}>
                                                {link.link}
                                            </Link>
                                        )}
                                    </Menu.Item>
                                ))}
                            </div>
                        </Menu.Items>
                </Transition>
            </Menu>
        </nav>
    )
}
