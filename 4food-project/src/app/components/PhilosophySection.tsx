import Image from "next/image";

import {motion} from 'framer-motion'

import HomemSushi from '@images/homem-fazendo-sushi.jpg'
import BandejaSushi from '@images/bandeja-sushi.jpg'
import PratoComSushi from '@images/prato-com-sushi.jpg'

export function PhilosophySection(){

    return (
        <section className="w-full mt-40 ">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
            > 
            <div>
                <div className="flex w-full gap-4">
                    <div>

                    <Image src={HomemSushi} width={500} alt="mapa" />
                    </div>
                    
                    <div className="flex flex-col gap-6 pt-20">

                        <Image src={PratoComSushi} width={300} alt="mapa" />
                        <Image src={BandejaSushi} width={300} alt="mapa" className="h-27" />
                    </div>
                </div>
            </div>
            </motion.div>
    </section>
    )
}