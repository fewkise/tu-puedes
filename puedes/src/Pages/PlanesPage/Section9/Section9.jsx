import React from 'react';
import styles from './Section9.module.css';

const Section9 = () => {
  return (
    <section className={styles.sectionContainer}>
      <h1 className={styles.title}>Nuestros Planes</h1>
      <p className={styles.subtitle}>Mañana agradecerás haber comenzado, haber perseverado y seguir el camino.</p>

      <div className={styles.plansGrid}>
        <div className={styles.planCard}>
          <div className={styles.planHeader}>
            <div style={{display:'flex', flexDirection:'column'}}>
                <span className={styles.planName}>Anual</span>
            <span className={styles.planPrice}>$15 USD/mes</span>
            </div>
            
            <span className={styles.recommendedTag}>Recomedada</span>
          </div>
          <div className={styles.planBody}>
            <p className={styles.planDescription}>
              El cobro mensual será de $15.00 por 12 meses de compromiso con débito automático.
            </p>
          </div>
          <div className={styles.planFooter}>
            <button className={styles.subscribeButton}>Suscribirme</button>
          </div>
        </div>

        <div className={styles.planCard}>
          <div className={styles.planHeader}>
            <span className={styles.planName}>Semestral</span>
            <span className={styles.planPrice}>$20 USD/mes</span>
          </div>
          <div className={styles.planBody}>
            <p className={styles.planDescription}>
              El cobro mensual será de $20.00 por 6 meses de compromiso con débito automático.
            </p>
          </div>
          <div className={styles.planFooter}>
            <button className={styles.subscribeButton}>Suscribirme</button>
          </div>
        </div>
        <div className={styles.planCard}>
          <div className={styles.planHeader}>
            <span className={styles.planName}>Trimestral</span>
            <span className={styles.planPrice}>$25 USD/mes</span>
          </div>
          <div className={styles.planBody}>
            <p className={styles.planDescription}>
              El cobro mensual será de $25.00 por 3 meses de compromiso con débito automático.
            </p>
          </div>
          <div className={styles.planFooter}>
            <button className={styles.subscribeButton}>Suscribirme</button>
          </div>
        </div>

        <div className={styles.planCard}>
          <div className={styles.planHeader}>
            <span className={styles.planName}>Mensual</span>
            <span className={styles.planPrice}>$32.5 USD/mes</span>
          </div>
          <div className={styles.planBody}>
            <p className={styles.planDescription}>
              El cobro mensual será de $32.5 con débito automático.
            </p>
          </div>
          <div className={styles.planFooter}>
            <button className={styles.subscribeButton}>Suscribirme</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section9;
