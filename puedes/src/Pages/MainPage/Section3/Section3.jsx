import React from 'react';
import styles from './Section3.module.css';
import icon1 from '../../../assets/Resistance Band.png'; 
import icon2 from '../../../assets/Yoga Mat.png'; 
import icon3 from '../../../assets/Ankle Weights.png'; 
import icon4 from '../../../assets/Dumbbell.png'; 

export const equipmentItems = [
  { name: 'Bandas de Resistencia', link: '/bandas', iconUrl: icon1 },
  { name: 'Yoga mat', link: '/yoga-mat', iconUrl: icon2 },
  { name: 'Polainas', link: '/polainas', iconUrl: icon3 },
  { name: 'Mancuerna de 5lbs.', link: '/mancuerna', iconUrl: icon4 },
];
const Section3 = () => {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.title}>Esto es todo lo que necesitas</h2>
      
      <div className={styles.gridContainer}>
        {equipmentItems.map((item) => (
          <div key={item.name} className={styles.card}>
            <img src={item.iconUrl} alt={item.name} className={styles.icon} />
            <div className={styles.label}>{item.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Section3;
