import React from 'react';
import styles from './Section4.module.css';
import img from '../../../assets/Rectangle 4247.png'
import checkMark from '../../../assets/Vector 210.png'
const features = [
  'Puedes entrenar desde cualquier sitio',
  'Rutinas que se adaptan a cada persona',
  'Conecta con otras personas',
  'Asiste a eventos y comparte con otras #Achievers',
];

const Section4 = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>De Mujeres para Mujeres</h1>
        <p className={styles.subtitle}>
          Rutinas cortas y efectivas que te harán sentir fuerte y flexible, ideal para mujeres retomando el ejercicio, embarazadas o en post parto, etapas duras que necesitan acompañamiento.
        </p>
        <ul className={styles.featuresList}>
          {features.map((feature, index) => (
            <li key={index} className={styles.featureItem}>
              <div className={styles.iconPlaceholder}>
                <img src={checkMark} alt="" />
                </div> 
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div className={styles.imageContainer}>
       <img src={img} alt="" />
      </div>
    </section>
  );
};

export default Section4;
