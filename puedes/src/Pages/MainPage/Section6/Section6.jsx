import React from 'react';
import styles from './Section6.module.css';

const Section6 = () => {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.title}>¿Qué esperas?</h2>
      
      <div className={styles.cardContainer}>
        <p className={styles.subtitle}>Comenzando desde</p>
        <p className={styles.price}>$12.5/Mensual</p>
        
        <div className={styles.buttonsContainer}>
          <button className={styles.button}>Ver planes</button>
          <button className={styles.button}>Clase de prueba</button>
        </div>
      </div>
    </section>
  );
};

export default Section6;
