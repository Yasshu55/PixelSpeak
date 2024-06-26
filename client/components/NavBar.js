import React, {useState} from 'react'
import { AiOutlineClose,AiOutlineMenu} from "react-icons/ai";
import Link from 'next/link';

export default function NavBar() {
    const [nav,setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Pixel Speak</h1>
        <ul className='hidden md:flex'>
        <Link href="/">
            <li className='p-4'>Home</li>
        </Link>
        <Link href="/">
            <li className='p-4'>About</li>
        </Link>
        <Link href="/login">
            <li className='p-4'>Login</li>
        </Link>
        <Link href="/register">
            <li className='p-4'>Register</li>
        </Link>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineMenu  size={20}/> : <AiOutlineClose size={20} />}
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Pixel Speak</h1>              
                <Link href="/">
                <li className='p-4 border-b border-gray-600'>Home</li>
                </Link>
                <Link href="/">
                <li className='p-4 border-b border-gray-600'>About</li>
                </Link>
                <Link href="/login">
                <li className='p-4 border-b border-gray-600'>Login</li>
                </Link>
                <Link href="/register">
                <li className='p-4 border-b border-gray-600'>Register</li>
                </Link>
        </ul>
    </div>
  )
}
