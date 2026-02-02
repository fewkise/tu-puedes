import React from 'react';
import styles from './Section2.module.css';
import img1 from '../../../assets/6e5ff6739421996cf96e0adb541a01a1836539aa.jpg';
import img2 from '../../../assets/f5fe8e0ff93e40c804d6c4319c4fd1d713bf69b1.jpg';
import img3 from '../../../assets/0f2dba1ac3c3cf579d5394b37cd8eb0f1b45cbba.jpg';
import img4 from '../../../assets/cc3487a18e144064cf8ca8a60a89090a0498e781.jpg';
import img5 from '../../../assets/407ec605e7908d5fb58bf1e3876100466c480ed0.jpg';
import img6 from '../../../assets/025f36db8cc3cb4115442418e46645c960dfd1a2.jpg';
import img7 from '../../../assets/57fe9bfa4fcfe508597230c47afdf74f33037f97.jpg';
import img8 from '../../../assets/2f72214684f030f79613d77ef12985838bfa226d.jpg';
const categories = [
  { name: 'Embarazo', link: '/embarazo', imageUrl: img1 },
  { name: 'Yoga', link: '/yoga', imageUrl: img2},
  { name: 'Estiramientos', link: '/estiramientos', imageUrl: img3 },
  { name: 'Resistencia', link: '/resistencia', imageUrl: img4 },
  { name: 'Con Equipo', link: '/con-equipo', imageUrl:img5 },
  { name: 'Sin Equipo', link: '/sin-equipo', imageUrl: img6 },
  { name: '15 Min', link: '/15-min', imageUrl:img7 },
  { name: 'Fuerza', link: '/fuerza', imageUrl:img8 },
];

const Section2 = () => {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.title}>Encuentra lo que se adapta a ti</h2>
      
      <div className={styles.gridContainer}>
        {categories.map((category) => (
          <div key={category.name} className={styles.card}>
            <img src={category.imageUrl} alt={category.name} className={styles.image} />
            <div className={styles.overlay}>{category.name}</div>
          </div>
        ))}
      </div>

      <button className={styles.exploreButton}>Explorar rutinas</button>
    </section>
  );
};

export default Section2;
