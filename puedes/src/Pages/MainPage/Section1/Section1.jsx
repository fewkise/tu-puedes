import React from 'react';
import styles from './Section1.module.css';

const Section1 = ({ imageUrl }) => {
  return (
    <section className={styles.sectionContainer}>
      <img src={imageUrl} alt="Background fitness" className={styles.backgroundImage} />
      
      <div className={styles.contentWrapper}>
        <h1 className={styles.mainTitle}>
          Tu puedes, solo tienes que creértelo
        </h1>
        <p className={styles.subtitle}>
          Un programa diseñado por mujeres para mujeres
        </p>
        <div className={styles.buttonGroup}>
          <button className={`${styles.button} ${styles.buttonPrimary}`}>
            Suscribirme
          </button>
          <button className={`${styles.button} ${styles.buttonSecondary}`}>
            Probar una clase
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section1;
