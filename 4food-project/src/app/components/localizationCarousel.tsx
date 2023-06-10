"use client"
import { useState } from 'react'
import { GrNext, GrPrevious } from 'react-icons/gr'
import Image from 'next/image'
import restaurant from '@images/restaurante.jpg'

export default function LocalizationCarousel () {

    const [changeImage, setChangeImage] = useState(0)

    const images = [
        {
            image: restaurant,
            adress: 'Rua dos salmões, 321, SC - Brasil'
    },
        {
            image: restaurant,
            adress: 'Rua dos salmões, 123, SC - Brasil'
    }
]

    const changeNextImage = () => {
        changeImage === images.length - 1 ? setChangeImage(0) : setChangeImage(changeImage + 1)
    }

    const changePreviousImage = () => {
        changeImage === 0 ? setChangeImage(images.length - 1) : setChangeImage(changeImage - 1)
    }

    return (
        <section>
            <div className='text-center mt-20 mb-14'>
                <h2 className='text-4xl uppercase font-bold p-4'>Nossas Localizações</h2>
                <p className='text-gray-400'>Venha conhecer nossos restaurantes, abaixo estão os endereços das nossas unidades!</p>
            </div>
            <div className='flex justify-center items-center relative'>
                <div onClick={changePreviousImage} className='w-16 h-16 border border-black bg-white 
                flex justify-center items-center mr-20 hover:scale-95 hover:cursor-pointer duration-300'>
                    <GrPrevious />
                </div>
                <div className='relative'>
                    <Image src={images[changeImage].image} alt="restaurant location" width={500}/>
                    <p className='w-auto max-w-[300] px-5 py-5 bg-white z-50 absolute bottom-10 left-14'>{images[changeImage].adress}</p>
                </div>
                <div onClick={changeNextImage} className='w-16 h-16 border border-black bg-white 
                flex justify-center items-center ml-20 hover:scale-95 hover:cursor-pointer duration-300'>
                    <GrNext />
                </div>
            </div>
        </section>
    )
}