import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '@/app/styles/home.module.css';


export default function ContainerNossaMissao(){
    return(
        <>
            <motion.div className={styles.containerSectionNossaMissao}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            <div className={styles.cardNossaMissao}>
                <div className={styles.cardNossaMissaoImage}>
                <Image src={"image-nossa-missao.svg"} alt='Imagem referente à sessão nossa missão' className={styles.imagemCardNossaMissao} width={0} height={0} />
                </div>
                <div className={styles.textContainerNossaMissao}>
                <h3>Nossa Missão</h3>
                <span>Nossa missão é democratizar o acesso a serviços financeiros e educação de qualidade. Queremos que cada pessoa, independentemente de sua experiência ou conhecimento prévio, tenha a oportunidade de investir de forma inteligente e segura, e adquirir as habilidades necessárias para prosperar financeiramente.</span>
                </div>
            </div>
            </motion.div>
        </>
    )
}