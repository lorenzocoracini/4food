import Image from 'next/image';
import Link from 'next/link';
import logo from '@images/logo-4food.png'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export function Header() {

  const links = [
    {
      id: 1,
      name: "Início",
      link: "/"
    },
    {
      id: 2,
      name: "Sobre",
      link: "/sobre"
    },
    {
      id: 3,
      name: "Cardápio",
      link: "/cardapio"
    },
  ]

  return (
    <div className='flex justify-around  items-center p-4 w-full h-24 fixed top-0 z-50 bg-white'>
      <div className=''>
        <Image src={logo} alt="Logo 4Food" className='w-48 hover:scale-95 hover:opacity-60 duration-300'/>
      </div>
      <ul className="flex gap-20">

        {links.map((link) => <li key={link.id}><Link href={link.link} className='text-2xl font-normal 
        hover:opacity-60 duration-300'>
          {link.name}
        </Link></li>)}

      </ul>

      <div className='flex justify-center items-center gap-11'>
        <button  className='text-4xl hover:opacity-60 hover:scale-95 duration-300'><AiOutlineShoppingCart /></button>
        <Link href="/login"><button className='bg-black text-white px-14 py-4 hover:opacity-60 hover:-translate-y-1 
        duration-300 text-xl'>Entrar</button></Link>
      </div>
    </div>
  );
}
