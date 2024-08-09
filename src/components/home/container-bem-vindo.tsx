import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '@/app/styles/home.module.css';


export default function ContainerBemVindo(){
    return(
        <>
            <motion.div className={styles.containerSectionNossaMissao}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            <div className={styles.cardNossaMissao}>
                <div className={styles.cardNossaMissaoImage}>
                <Image src={"image-bem-vindo.svg"} alt='Imagem referente à sessão nossa missão' className={styles.imagemCardNossaMissao} width={0} height={0} />
                </div>
                <div className={styles.textContainerNossaMissao}>
                <h3>Bem-vindo ao Upper</h3>
                <span>No Upper, acreditamos que o futuro das finanças é digital e acessível a todos. Somos um banco digital inovador, criado com o propósito de transformar a maneira como você gerencia seu dinheiro e investe no seu futuro. Combinando tecnologia de ponta e uma abordagem centrada no cliente, oferecemos uma plataforma completa de serviços financeiros e educação para empoderar você a tomar as melhores decisões financeiras.</span>
                </div>
            </div>
            </motion.div>
        </>
    )
}