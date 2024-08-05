import styles from '@/app/styles/home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <nav className={styles.nav}>
        <div className={styles.containerMenu}>
          <Image  src={"logo-horizontal.svg"} alt='logo' width={119} height={37}/>
          <ul className={styles.textoNavbar}>
            <li><a href="#" className={styles.menuItem}>UPPER</a></li>
            <li><a href="#" className={styles.menuItem}>TEM NO UPPER</a></li>
            <li><a href="#" className={styles.menuItem}>SOBRE</a></li>
            <li><a href="#" className={styles.menuItem}>AJUDA</a></li>
          </ul>
          <button className={styles.primaryButton}>ABRIR CONTA</button>
        </div>
      </nav>
      <section className="flex max-w-[1000px] justify-center">
        <h1 className={styles.h1}>O banco que leva você ao topo</h1>
      </section>
    </main>
  );
}