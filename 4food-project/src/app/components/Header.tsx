'use client'
import Image from 'next/image';
import Link from 'next/link';
import logo from '@images/logo-4food.png'
import { AiOutlineShoppingCart, AiOutlineMenu } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import { useState } from 'react';
import { Button } from './Button';

export function Header() {

  const [menuTab, setMenuTab] = useState(false)

  const links = [
    {
      id: 1,
      name: "início",
      link: "/"
    },
    {
      id: 2,
      name: "sobre",
      link: "/sobre"
    },
    {
      id: 3,
      name: "cardápio",
      link: "/cardapio"
    },
  ]

  return (
    <div className='flex justify-between items-center p-6 w-screen fixed top-0 z-50 bg-white lg:justify-around'>
      <div>
        <Image src={logo} alt="Logo 4Food" className='w-2/5 lg:w-48 hover:scale-95 
        hover:opacity-60 duration-300'/>
      </div>

      <ul className="p-4 hidden gap-20 lg:flex justify-center">

        {links.map((link) => <li key={link.id}><Link href={link.link} className='text-lg 
        hover:opacity-60 duration-300 uppercase tracking-widest font-bold'>
          {link.name}
        </Link></li>)}

      </ul>

      <div className='flex justify-center items-center gap-11'>

        <button  className='text-3xl hover:opacity-60 hover:scale-95 duration-300'><AiOutlineShoppingCart /></button>

        <button className='text-2xl lg:hidden' onClick={() => setMenuTab(!menuTab)}>
          {menuTab ? <GrClose />: <AiOutlineMenu />} 
        </button>

        <Link href="/login" className=' hidden lg:block'>
          <Button onClick={undefined} style={undefined}>Entrar</Button>
        </Link>

      </div>

      {menuTab && (

      <ul className='lg:hidden flex flex-col justify-center items-start absolute z-50 bg-white p-4 top-24 left-0 w-full
      h-auto border-t border-b'>

        {links.map((link) => <li key={link.id}><Link href={link.link} className='text-base
        uppercase tracking-widest font-bold px-3 py-4 leading-8'>
          {link.name}
        </Link></li>)}

        <li>
          <Link href="/login" className='block px-3 py-4'>
            <Button onClick={undefined} style={undefined}>Entrar</Button>
          </Link>
        </li>

      </ul>
      )}
    </div>
  );
}
