import exemploSushi from '@images/sushiexemplo.jpg'
import cortantoSalmao from '@images/pexels-cottonbro-studio-3296280.jpg'
import combo from '@images/combinho.jpeg'
import Image from "next/image"

export default function AboutUs () {
    return (
        <div className='flex mx-20 pb-32 border-b border-gray-300'>
            <div className='w-3/5 m-4'>
                <p className="text-gray-900 text-xl">私たちに関しては</p>
                <h1 className="font-bold text-6xl uppercase mt-4">Sobre Nosso Restaurante</h1>
                <p className='my-10 text-gray-400 max-w-2xl'>
                    Bem-vindo ao Restaurante 4Food, onde a tradição culinária japonesa encontra a modernidade e o sabor. 
                    Localizado no coração da cidade, nosso restaurante é conhecido por oferecer uma experiência gastronômica única 
                    que combina qualidade excepcional, serviço impecável e um ambiente acolhedor.
                </p>
                <div className='flex'>
                    <div className='flex flex-col mr-5 gap-5'>
                        <div className='w-80 border border-gray-400 p-10 
                        text-2xl font-bold uppercase text-center'>Frescor</div>
                        <div className='w-80 border border-gray-400 p-10
                        text-2xl font-bold uppercase text-center'>Tradição</div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='w-80 border border-gray-400 p-10 
                        text-2xl font-bold uppercase text-center'>Inovação</div>
                        <div className='w-80 border border-gray-400 p-10
                        text-2xl font-bold uppercase text-center'>Excelência</div>
                    </div>
                </div>
            </div>
            <div className='flex w-2/5 m-4'>
                <div className='flex flex-col gap-4'>
                    <Image src={cortantoSalmao} alt='Imagem ilustrativa Ramem' width={380}/>
                    <Image src={exemploSushi} alt='Imagem ilustrativa suhsi' width={380}/>
                </div>
                <div className='ml-4 mt-20'>
                    <Image src={combo} alt='Imagem ilustrativa combo comida' width={460}/>
                </div>
            </div>
        </div>
    )
}