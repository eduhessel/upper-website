import React, { useState } from 'react';
import styles from './faq.module.css'
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline';

export default function Faq(){
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleClick = (item: string) => {
    setActiveItem(activeItem === item ? null : item);
  };

  return (
    <footer className={styles.containerFaq}>
      <div className='text-center'>
        <h3 className='text-center'>Ficou alguma dúvida?</h3>
        <h5>Se a sua dúvida não estiver nas perguntas frequentes, fala com a gente!</h5>
      </div>
      <div className='flex flex-col gap-6'>
        <div>
          <button onClick={() => handleClick('item1')} className={styles.faqButton}>
            <div className='flex justify-between items-center'>
              <h6>É necessário ter uma renda mínima para abrir uma conta Upper?</h6>
              {activeItem === 'item1' ? (
                <MinusCircleIcon className='max-w-[24px] min-w-[24px] text-white stroke-1' />
              ) : (
                <PlusCircleIcon className='max-w-[24px] min-w-[24px] text-white stroke-1' />
              )}
            </div>
          </button>
          {activeItem === 'item1' && (
            <div style={{ marginTop: '0.5rem' }}>
              <span>Você precisa informar uma renda de, no mínimo R$ 3.000,00 para abrir a sua conta Upper.</span>
            </div>
          )}
        </div>
        <hr />
        <div>
          <div>
            <button onClick={() => handleClick('item2')} className={styles.faqButton}>
              <div className='flex justify-between items-center'>
                <h6>É necessário ter uma renda mínima para abrir uma conta Upper?</h6>
                {activeItem === 'item2' ? (
                  <MinusCircleIcon className='max-w-[24px] min-w-[24px] text-white stroke-1' />
                ) : (
                  <PlusCircleIcon className='max-w-[24px] min-w-[24px] text-white stroke-1' />
                )}
              </div>
            </button>
            {activeItem === 'item2' && (
              <div style={{ marginTop: '0.5rem' }}>
                <span>Você precisa informar uma renda de, no mínimo R$ 3.000,00 para abrir a sua conta Upper.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};