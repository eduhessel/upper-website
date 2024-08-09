'use client'

import styles from '@/app/styles/home.module.css';
import Faq from '@/components/faq';
import Footer from '@/components/footer';
import CardsNossosValores from '@/components/home/cards-nossos-valores';
import ContainerBemVindo from '@/components/home/container-bem-vindo';
import ContainerExperienciaTransparente from '@/components/home/container-experiencia-transparente';
import ContainerJunteseANos from '@/components/home/container-juntese-a-nos';
import ContainerNossaMissao from '@/components/home/container-nossa-missao';
import { AcademicCapIcon, ChartBarIcon, CurrencyDollarIcon, InformationCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  }

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  }

  useEffect(() => {
    if (isSubmenuOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }
    return () => {
      document.body.classList.remove(styles.noScroll);
    };
  }, [isSubmenuOpen]);

  return (
    <main className={"flex flex-col min-h-screen w-full"}>
      {/* Menu de navegação */}
      <nav className={styles.navUp}>
        <div className={styles.containerMenu}>
          <ul className={styles.textoNavbar}>
            <li><a href="#" className={styles.menuItem1}>Para você</a></li>
            <li><a href="#" className={styles.menuItem2}>Para sua empresa</a></li>
          </ul>
          <button className={styles.secondaryButton}>ACESSAR CONTA</button>
        </div>
      </nav>
      <nav className={styles.nav}>
        <div className={styles.containerMenu}>
          <Image src={"logo-horizontal.svg"} alt='logo' width={119} height={37} />
          <ul className={styles.textoNavbar}>
            <li><a href="#" className={styles.menuItem1}>TEM NO UPPER</a></li>
            <li><a className={styles.menuItem2} onClick={toggleSubmenu}>EDUCAÇÃO FINANCEIRA <Image src={"down-arrow-icon.svg"} alt='seta-baixo' height={24} width={24} /></a></li>
            <li><a href="#" className={styles.menuItem3}>CEBRAC</a></li>
            <li><a href="#" className={styles.menuItem4}>AJUDA</a></li>
          </ul>
          <button className={styles.primaryButton}>ABRIR CONTA</button>
          <button className={styles.menuHamburguer}><Image src={"hamburguer-icon.svg"} alt='seta-baixo' height={24} width={24} /></button>
        </div>
      </nav>
      {/* Modal Tem no Upper*/}
      {isSubmenuOpen && (
        <motion.div className={styles.submenu}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}>
          <div className={styles.submenuContent}>
            <div className='flex items-center justify-between'>
              <p className='text-xl pb-4'>Tem no Upper</p>
              <button onClick={closeSubmenu} className={styles.closeButtonIcon}><Image src={"x-icon.svg"} alt='seta-baixo' height={24} width={24} /></button>
            </div>
            <div className='mb-8'>
              <h3>Produtos e Serviços UPPER</h3>
              {/* Cards fileira 1 */}
              <div className='flex gap-4 flex-wrap'>
                <div className='flex flex-col'>
                  <button className={styles.cardSubMenu}>
                    <XMarkIcon className={styles.imageCardSubMenu} />
                    <p>Conta Digital com Serviços Transacionais</p>
                  </button>
                </div>
                <div className='flex flex-col'>
                  <button className={styles.cardSubMenu}>
                    <XMarkIcon className={styles.imageCardSubMenu} />
                    <p>Serviços de Investimentos em Criptos, CCBs e NCs</p>
                  </button>
                </div>
                <div className='flex flex-col'>
                  <button className={styles.cardSubMenu}>
                    <XMarkIcon className={styles.imageCardSubMenu} />
                    <p>Fundo Crypto</p>
                  </button>
                </div>
                <div className='flex flex-col'>
                  <button className={styles.cardSubMenu}>
                    <XMarkIcon className={styles.imageCardSubMenu} />
                    <p>Token UPPER</p>
                  </button>
                </div>
                <div className='flex flex-col'>
                  <button className={styles.cardSubMenu}>
                    <XMarkIcon className={styles.imageCardSubMenu} />
                    <p>Cursos Profissionalizantes na Plataforma do CEBRAC</p>
                  </button>
                </div>
                <div className='flex flex-col'>
                  <button className={styles.cardSubMenu}>
                    <XMarkIcon className={styles.imageCardSubMenu} />
                    <p>Por que Escolher a UPPER?</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      {/* Body */}
      <div className='pt-8 flex flex-col gap-8'>
        <section className={styles.sectionHeader}>
          <motion.div className={styles.containerHeader}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            <h1>O banco que leva você ao topo</h1>
            <h2>Sua vida financeira, simplificada e poderosa</h2>
            <div className={styles.buttonsContainer}>
              <button className={styles.primaryButton}>ABRIR CONTA</button>
              <button className={styles.terciaryButton}>
                BAIXE O NOSSO APP <Image src={"right-arrow-icon.svg"} alt='seta-direita' height={24} width={24} />
              </button>
            </div>
          </motion.div>
        </section>
        <section className={styles.sectionBemVindo}>
          <ContainerBemVindo/>
        </section>
        <section className={styles.sectionExperienciaTransparente}>
          <ContainerExperienciaTransparente/>
        </section>
        <section className={styles.sectionNossaMissao}>
          <div className='flex flex-col gap-8'>
            <h2>Resolva sua vida financeira em poucos cliques</h2>
            <ContainerNossaMissao />
            <ContainerJunteseANos/>
          </div>
        </section>
        <section className={styles.sectionNossosValores}>
          <div className='flex flex-col gap-8'>
            <h2>Nossos valores</h2>
            <CardsNossosValores/>
          </div>
        </section>
        <section className={styles.sectionFaq}>
          <Faq/>
        </section>
        <footer className={styles.sectionFooter}>
          <Footer/>
        </footer>
      </div>
    </main>
  );
}