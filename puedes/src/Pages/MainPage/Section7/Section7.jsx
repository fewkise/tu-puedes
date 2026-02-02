import React from 'react';
import styles from './Section7.module.css';
import img1 from '../../../assets/Rectangle 4178.png'
import img2 from '../../../assets/Rectangle 4178 (1).png'
const Section7 = () => {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.title}>Conoce a tus Entrenadoras</h2>
      
      <div className={styles.trainersContainer}>
        <div className={styles.trainerCard}>
          
          <div className={styles.imagePlaceholder}>
            <img src={img1} alt="" />
          </div>
          <div className={styles.nameOverlay}>Maria</div>
        </div>

        <div className={styles.trainerCard}>
           <img src={img2} alt="" />
          <div className={styles.nameOverlay}>Merce</div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
