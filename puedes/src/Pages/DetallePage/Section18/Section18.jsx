import React from 'react';
import styles from './Section18.module.css';
import icon1 from '../../../assets/Resistance Band.png'; 
import icon2 from '../../../assets/Yoga Mat.png'; 
import icon3 from '../../../assets/Ankle Weights.png'; 
import icon4 from '../../../assets/Dumbbell.png'; 
import img1 from '../../../assets/Rectangle 4247 (2).png'
export const equipmentItems = [
  { name: 'Bandas de Resistencia', link: '/bandas', iconUrl: icon1 },
  { name: 'Yoga mat', link: '/yoga-mat', iconUrl: icon2 },
  { name: 'Polainas', link: '/polainas', iconUrl: icon3 },
  { name: 'Mancuerna de 5lbs.', link: '/mancuerna', iconUrl: icon4 },
];
const Section18 = () => {
  return (
    <section className={styles.sectionContainer}>


      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.mainTitle}>Rocket Yoga for Beginners <br />Categoria</h1>
          <div className={styles.trainerInfo}>
            
            <p className={styles.trainerName}>Maria</p>
            <div className={styles.trainerIcon}></div>
          </div>
        </div>

        <div className={styles.infoSection}>
          <p className={styles.sectionTitle}>INFORMACIÓN</p>
          <p className={styles.description}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className={styles.infoSection}>
          <p className={styles.sectionTitle}>EQUIPO</p>
                <div className={styles.gridContainer}>
                  {equipmentItems.map((item) => (
                    <div key={item.name} className={styles.card}>
                      <img src={item.iconUrl} alt={item.name} className={styles.icon} />
                      <div className={styles.label}>{item.name}</div>
                    </div>
                  ))}
                </div>
        </div>
        
        <button className={styles.startButton}>Entrena con Maria</button>
      </div>
      <div className={styles.imageContainer}>
        <img src={img1} alt="" />
      </div>
    </section>
  );
};

export default Section18;
