'use client'

import styles from '@/app/styles/home.module.css';
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
            <li><a href="#" className={styles.menuItem1}>UPPER</a></li>
            <li><a className={styles.menuItem2} onClick={toggleSubmenu}>TEM NO UPPER <Image src={"down-arrow-icon.svg"} alt='seta-baixo' height={24} width={24} /></a></li>
            <li><a href="#" className={styles.menuItem3}>SOBRE</a></li>
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
        <motion.div className={styles.containerSectionBemVindo}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <div className={styles.cardBemVindo}>
            <Image src={"image-bem-vindo.svg"} alt={'2 iphones com imagens do aplicativo'} className={styles.imagemCardBemVindo} width={0} height={0} />
            <div className={styles.cardContentBemVindo}>
              <h3>Bem-vindo ao Upper</h3>
              <span>No Upper, acreditamos que o futuro das finanças é digital e acessível a todos. Somos um banco digital inovador, criado com o propósito de transformar a maneira como você gerencia seu dinheiro e investe no seu futuro. Combinando tecnologia de ponta e uma abordagem centrada no cliente, oferecemos uma plataforma completa de serviços financeiros e educação para empoderar você a tomar as melhores decisões financeiras.</span>
              <button className={styles.primaryButton}>ABRIR CONTA</button>
            </div>
          </div>
        </motion.div>
      </section>
      <section className={styles.sectionNossaMissao}>
        <motion.div className={styles.containerSectionNossaMissao}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <h2>Resolva sua vida financeira em poucos cliques</h2>
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
      </section>
      <section className={styles.sectionExperienciaTransparente}>
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
          <button className={styles.primaryButton}>ABRIR CONTA</button>
        </motion.div>
      </section>
    </main>
  );
}