import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '@/app/styles/home.module.css';
import { AcademicCapIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';


export default function ContainerExperienciaTransparente(){
    return(
        <>
            <motion.div className={styles.containerSectionExperienciaTransparente}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            <h2>Uma experiência transparente</h2>
            <div className={styles.containerCardExperienciaTransparente}>
                <div className={styles.cardExperienciaTransparenteContent}>
                <div className='w-[80px] h-[80px] bg-transparent border-white border-solid border rounded-full flex justify-center items-center'>
                    <CurrencyDollarIcon className='max-w-[56px] min-w-[56px] text-white stroke-1'/>
                </div>
                <div className='flex flex-col text-white gap-2'>
                    <p className='font-normal'>Serviços Bancários Completos</p>
                    <span>Com a nossa conta digital, você pode realizar todas as suas transações financeiras de maneira simples e segura. Desde pagamentos e transferências até gerenciamento de contas, nossa plataforma está preparada para atender todas as suas necessidades bancárias diárias. Venha ser Upper agora mesmo!</span>
                </div>
                </div>
                <div className={styles.cardExperienciaTransparenteContent}>
                <div className='w-[80px] h-[80px] bg-transparent border-white border-solid border rounded-full flex justify-center items-center'>
                    <ChartBarIcon className='max-w-[56px] min-w-[56px] text-white stroke-1'/>
                </div>
                <div className='flex flex-col text-white gap-2'>
                    <p className='font-normal'>Investimentos Diversificados</p>
                    <span>Oferecemos uma wallet de investimentos robusta, onde você pode diversificar seu portfólio com criptomoedas, CCBs e NCs. Nossa plataforma é projetada para ser intuitiva e acessível, permitindo que tanto investidores iniciantes quanto experientes possam investir com confiança.</span>
                </div>
                </div>
                <div className={styles.cardExperienciaTransparenteContent}>
                <div className='w-[80px] h-[80px] bg-transparent border-white border-solid border rounded-full flex justify-center items-center'>
                    <AcademicCapIcon className='max-w-[56px] min-w-[56px] text-white stroke-1'/>
                </div>
                <div className='flex flex-col text-white gap-2'>
                    <p className='font-normal'>Educação Financeira</p>
                    <span>Acreditamos que o conhecimento é a chave para o sucesso financeiro. Por isso, temos uma parceria exclusiva com a Cebrac, uma das principais plataformas de cursos profissionalizantes do Brasil. Através dessa parceria, nossos clientes têm acesso a uma ampla variedade de cursos e recursos educacionais.</span>
                </div>
                </div>
            </div>
            </motion.div>
        </>
    )
}