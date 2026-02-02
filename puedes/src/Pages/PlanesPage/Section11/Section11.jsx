import React, { useState } from 'react';
import styles from './Section11.module.css';

const faqItems = [
  {
    id: 1,
    question: '¿Cuánto Cuesta?',
    answer: 'Achieve te acompaña en cualquier etapa de tu vida, embarazo, post parto, post covid, retomando, clases para avanzada. Lo importante es moverte. ',
  },
  {
    id: 2,
    question: '¿Qué incluye mi subscripción?',
    answer: 'Achieve te acompaña en cualquier etapa de tu vida, embarazo, post parto, post covid, retomando, clases para avanzada. Lo importante es moverte. Achieve te acompaña en cualquier etapa de tu vida, embarazo, post parto, post covid, retomando, clases para avanzada. Lo importante es moverte. ',
  },
  {
    id: 3,
    question: '¿Cómo cancelo mi suscripción?',
    answer: 'Achieve te acompaña en cualquier etapa de tu vida, embarazo, post parto, post covid, retomando, clases para avanzada. Lo importante es moverte. ',
  },
  {
    id: 4,
    question: '¿Dónde puedo ver las clases?',
    answer: 'Achieve te acompaña en cualquier etapa de tu vida, embarazo, post parto, post covid, retomando, clases para avanzada. Lo importante es moverte.',
  },
  {
    id: 5,
    question: '¿Qué equipo necesito?',
    answer: 'Achieve te acompaña en cualquier etapa de tu vida, embarazo, post parto, post covid, retomando, clases para avanzada. Lo importante es moverte. ',
  },
];

const Section11 = () => {
  const [openItemIds, setOpenItemIds] = useState([]);

  const toggleItem = (id) => {
    setOpenItemIds(prevIds => {
      if (prevIds.includes(id)) {
        return prevIds.filter(itemId => itemId !== id);
      } else {
        return [...prevIds, id];
      }
    });
  };

  return (
    <section className={styles.sectionContainer}>
      <h1 className={styles.title}>FAQ</h1>
      <p className={styles.subtitle}>Tienes más preguntas?</p>

      <div className={styles.faqList}>
        {faqItems.map((item) => {
          const isExpanded = openItemIds.includes(item.id);

          return (
            <div key={item.id} className={styles.accordionItem}>
              <button 
                className={styles.questionButton} 
                onClick={() => toggleItem(item.id)}
                aria-expanded={isExpanded}
              >
                {item.question}
                <span className={`${styles.arrowIcon} ${isExpanded ? styles.expanded : ''}`}>
                  &#x2335;
                </span>
              </button>
              
              <div className={`${styles.answerContent} ${isExpanded ? styles.expanded : ''}`}>
                <p className={styles.answerText}>
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section11;
