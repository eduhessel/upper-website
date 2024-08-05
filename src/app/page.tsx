import styles from '@/app/styles/home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <nav className={styles.nav}>
        <div className={styles.containerMenu}>
          <Image  src={"logo-horizontal.svg"} alt='logo' width={119} height={37}/>
          <ul className={styles.textoNavbar}>
            <li><a href="#" className={styles.menuItem1}>UPPER</a></li>
            <li><a href="#" className={styles.menuItem2}>TEM NO UPPER <Image src={"down-arrow-icon.svg"} alt='seta-baixo' height={24} width={24}/></a></li>
            <li><a href="#" className={styles.menuItem3}>SOBRE</a></li>
            <li><a href="#" className={styles.menuItem4}>AJUDA</a></li>
          </ul>
          <button className={styles.primaryButton}>ABRIR CONTA</button>
        </div>
      </nav>
      <section className={styles.sectionHeader}>
        <div className={styles.containerHeader}>
          <h1 className={styles.h1}>O banco que leva você ao topo</h1>
          <h2 className={styles.h2}>Sua vida financeira, simplificada e poderosa</h2>
          <div className={styles.buttonsContainer}>
            <button className={styles.primaryButton}>ABRIR CONTA</button>
            <button className={styles.terciaryButton}>BAIXE O NOSSO APP</button>
          </div>
        </div>
      </section>
    </main>
  );
}