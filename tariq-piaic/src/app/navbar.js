"use client";


import Image from "next/image";
import logo from "../../public/red-p-logo-text_dao_croped.png";
import { Fragment, useState } from 'react'
// import { Listbox, Transition } from '@headlessui/react'
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
]





function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>

            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*PANAVERSE DAO container*/}
                
                <a className="text-xl font-semibold" href="/"><Image className='h-10 w-20' src={logo} alt="" /></a>
            </div>
            <div className="flex flex-col ml-4">
            <a className="text-xl font-medium my-4" href="/#" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Home
                </a>
                <a className="text-xl font-normal my-4" href="/courses" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Courses
                </a>
                <a className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    About
                </a>
                <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Contact
                </a>
            </div>  
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(people[0])

    return (
        <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="p-5 w-3/12 flex items-center">
                <a className="text-2xl font-semibold" href="/"><Image className='h-10 w-20' src={logo} alt="" /></a>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <NavLink to="/#">
                        HOME
                    </NavLink>
                    <NavLink to="/courses">
                        COURSES
                    </NavLink>                    
                    <NavLink to="/contact">
                        CONTACT
                    </NavLink>
                    <NavLink to="/about">
                        ABOUT
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}