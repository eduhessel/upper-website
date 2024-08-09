import { motion } from 'framer-motion';
import styles from './4-cards.module.css';
import { AcademicCapIcon, BoltIcon, CubeTransparentIcon, RocketLaunchIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function CardsNossosValores(){
    return(
        <>
            <motion.div className={styles.containerNossosValores}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
                <div className='flex gap-4'>
                    <div className={styles.card}>
                        <div className='w-[80px] h-[80px] bg-transparent border-white border-solid border rounded-full flex justify-center items-center'>
                            <RocketLaunchIcon className='max-w-[56px] min-w-[56px] text-white stroke-1'/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className={styles.spanTitle}>Empoderamento</span>
                            <span>Estamos constantemente buscando maneiras de inovar e melhorar nossos serviços, utilizando a tecnologia para oferecer soluções financeiras de ponta.</span>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className='w-[80px] h-[80px] bg-transparent border-white border-solid border rounded-full flex justify-center items-center'>
                            <CubeTransparentIcon className='max-w-[56px] min-w-[56px] text-white stroke-1'/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className={styles.spanTitle}>Transparência</span>
                            <span>Mantemos uma comunicação clara e aberta com nossos clientes, garantindo que todas as informações sejam acessíveis e compreensíveis.</span>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4'>
                <div className={styles.card}>
                        <div className='w-[80px] h-[80px] bg-transparent border-white border-solid border rounded-full flex justify-center items-center'>
                            <BoltIcon className='max-w-[56px] min-w-[56px] text-white stroke-1'/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className={styles.spanTitle}>Inovação</span>
                            <span>Nosso objetivo é capacitar nossos clientes com as ferramentas e conhecimentos necessários para tomar decisões financeiras informadas e eficazes.</span>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className='w-[80px] h-[80px] bg-transparent border-white border-solid border rounded-full flex justify-center items-center'>
                            <ShieldCheckIcon className='max-w-[56px] min-w-[56px] text-white stroke-1'/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className={styles.spanTitle}>Segurança</span>
                            <span>Priorizamos a segurança de seus dados e investimentos, adotando as melhores práticas e tecnologias de segurança cibernética.</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}