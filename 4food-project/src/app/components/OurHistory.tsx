import ilustração from '@images/pexels-elif-tekkaya-5616153.jpg'
import restaurante from '@images/pexels-vicky-tran-2317542.jpg'
import Image from 'next/image'

export function OurHistory () {
    return (
        <div className='flex mx-20 mt-32 pb-20 h-screen border-b border-gray-300'>
            <div className='flex flex-col justify-center items-center gap-3 w-2/5 relative'>
                <Image src={restaurante} alt='Imagem ilustrativa Restaurante' width={320} className='absolute top-0'/>
                <Image src={ilustração} alt='Imagem ilustrativa pessoas comendo' width={320} className='absolute bottom-0 right-5'/>
            </div>
            <div className='w-3/5 pl-8'>
                <h2 className='text-4xl uppercase font-bold pb-8'>Nossa História</h2>
                <div className='max-w-2xl text'>
                    <p className='leading-7 text-xl text-gray-400 indent-6'>
                    Em 2015, quatro jovens empreendedores com uma paixão compartilhada pela culinária japonesa decidiram 
                    transformar seu sonho em realidade. Assim nasceu o 4Food, um restaurante que trazia consigo a promessa 
                    de oferecer uma experiência única e autêntica aos amantes da gastronomia japonesa.
                    </p>
                    <p className='leading-7 text-xl text-gray-400 indent-6'>
                    Ao longo dos anos, o 4Food cresceu e se tornou um destino popular para os amantes de sushi e culinária 
                    japonesa. A dedicação dos quatro fundadores, juntamente com a equipe talentosa que se juntou a eles, 
                    resultou em pratos excepcionais que encantam os clientes e contam a história da paixão e do compromisso 
                    por trás de cada mordida.
                    </p>
                    <p className='leading-7 text-xl text-gray-400 indent-6'>
                    Hoje, o 4Food continua a ser um lugar onde a tradição se encontra com a inovação, onde os sabores 
                    autênticos da culinária japonesa são celebrados em um ambiente acolhedor. A história desse restaurante 
                    único continua a ser escrita, sempre com a mesma paixão e dedicação que o tornaram um sucesso desde o 
                    primeiro dia.
                    </p>
                </div>
            </div>
        </div>
    )
}