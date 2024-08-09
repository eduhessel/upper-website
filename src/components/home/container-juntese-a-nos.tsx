import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '@/app/styles/home.module.css';


export default function ContainerJunteseANos(){
    return(
        <>
            <motion.div className={styles.containerSectionNossaMissao}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            <div className={styles.cardNossaMissao}>
                <div className={styles.cardNossaMissaoImage}>
                <Image src={"image-juntese-a-nos.svg"} alt='Imagem referente à sessão nossa missão' className={styles.imagemCardNossaMissao} width={0} height={0} />
                </div>
                <div className={styles.textContainerNossaMissao}>
                <h3>Junte-se a Nós</h3>
                <span>Estamos comprometidos em oferecer uma experiência financeira completa e acessível para todos. Venha fazer parte da revolução financeira com o Upper e descubra como podemos ajudá-lo a alcançar seus objetivos financeiros e investir no seu futuro com confiança.</span>
                </div>
            </div>
            </motion.div>
        </>
    )
}