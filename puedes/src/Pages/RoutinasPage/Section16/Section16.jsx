import React from 'react';
import styles from './Section16.module.css';
import img1 from '../../../assets/6e5ff6739421996cf96e0adb541a01a1836539aa.jpg';
import img2 from '../../../assets/f5fe8e0ff93e40c804d6c4319c4fd1d713bf69b1.jpg';
import img3 from '../../../assets/0f2dba1ac3c3cf579d5394b37cd8eb0f1b45cbba.jpg';
import img4 from '../../../assets/cc3487a18e144064cf8ca8a60a89090a0498e781.jpg';
import img5 from '../../../assets/407ec605e7908d5fb58bf1e3876100466c480ed0.jpg';
import img6 from '../../../assets/025f36db8cc3cb4115442418e46645c960dfd1a2.jpg';
import img7 from '../../../assets/57fe9bfa4fcfe508597230c47afdf74f33037f97.jpg';
import img8 from '../../../assets/2f72214684f030f79613d77ef12985838bfa226d.jpg';
import img9 from '../../../assets/Rectangle 4230 (3).png';
import img10 from '../../../assets/Rectangle 4230 (4).png';
import img11 from '../../../assets/Rectangle 4230 (5).png';
import img12 from '../../../assets/Rectangle 4230 (6).png';
const categories = [
  { name: 'Embarazo', imageUrl: img1 },
  { name: 'Yoga', imageUrl: img2 },
  { name: 'Estiramientos', imageUrl: img3 },
  { name: 'Resistencia', imageUrl: img4 },
  { name: 'Fuerza', imageUrl: img5 },
  { name: 'Sin Equipo', imageUrl: img6 },
  { name: 'Con Equipo', imageUrl: img7 },
];

const routines = [
  { id: 1, trainer: 'Maria',trainerImageUrl: img8 , duration: '60 min', difficulty: 'Beginner', category: 'Categoría', title: 'Titulo', imageUrl: img9 },
  { id: 2, trainer: 'Maria',trainerImageUrl: img8 , duration: '60 min', difficulty: 'Beginner', category: 'Categoría', title: 'Titulo', imageUrl: img10 },
  { id: 3, trainer: 'Maria',trainerImageUrl: img8 , duration: '60 min', difficulty: 'Beginner', category: 'Categoría', title: 'Titulo', imageUrl: img11},
  { id: 4, trainer: 'Maria',trainerImageUrl: img8 , duration: '60 min', difficulty: 'Beginner', category: 'Categoría', title: 'Titulo', imageUrl: img9 },
  { id: 5, trainer: 'Maria', trainerImageUrl: img8 ,duration: '60 min', difficulty: 'Beginner', category: 'Categoría', title: 'Titulo', imageUrl: img10 },
  { id: 6, trainer: 'Maria',trainerImageUrl: img8 , duration: '60 min', difficulty: 'Beginner', category: 'Categoría', title: 'Titulo', imageUrl:img12 },
  { id: 7, trainer: 'Maria',trainerImageUrl: img8 , duration: '60 min', difficulty: 'Beginner', category: 'Categoría', title: 'Titulo', imageUrl: img9 },
  { id: 8, trainer: 'Maria',trainerImageUrl: img8 , duration: '60 min', difficulty: 'Beginner', category: 'Categoría', title: 'Titulo', imageUrl: img10 },
  { id: 9, trainer: 'Maria',trainerImageUrl: img8 , duration: '60 min', difficulty: 'Beginner', category: 'Categoría', title: 'Titulo', imageUrl: img11 },
  { id: 10, trainer: 'Maria',trainerImageUrl: img8 , duration: '60 min', difficulty: 'Beginner', category: 'Categoría', title: 'Titulo', imageUrl: img12 },
  { id: 11, trainer: 'Maria',trainerImageUrl: img8 , duration: '60 min', difficulty: 'Beginner', category: 'Categoría', title: 'Titulo', imageUrl: img9 },
  { id: 12, trainer: 'Maria', trainerImageUrl: img8 ,duration: '60 min', difficulty: 'Beginner', category: 'Categoría', title: 'Titulo', imageUrl:img10 },
  { id: 13, trainer: 'Maria',trainerImageUrl: img8 , duration: '60 min', difficulty: 'Beginner', category: 'Categoría', title: 'Titulo', imageUrl: img11 },
{ id: 13, trainer: 'Maria',trainerImageUrl: img8 , duration: '60 min', difficulty: 'Beginner', category: 'Categoría', title: 'Titulo', imageUrl:img12 },
];

const Section16 = () => {
  return (
    <section className={styles.sectionContainer}>
      <h1 className={styles.mainTitle}>Rutinas cortas y efectivas</h1>

      <div className={styles.filterButtons}>
        <button className={`${styles.filterButton} ${styles.active}`}>Entreno</button>
        <button className={styles.filterButton}>Tiempo</button>
      </div>
      
      <div className={styles.categoriesGrid}>
        {categories.map((category) => (
          <div key={category.name} className={styles.categoryCard}>
            {/* Используем img с импортированным URL и стилями обрезки */}
            <img src={category.imageUrl} alt={category.name} className={styles.categoryImagePlaceholder} />
            <div className={styles.categoryNameOverlay}>{category.name}</div>
          </div>
        ))}
      </div>

      <div className={styles.routinesGrid}>
        {routines.map((routine) => (
          <div key={routine.id} className={styles.routineCard}>
            <div className={styles.routineImageContainer}>
              <div className={styles.routineImagePlaceholder}>
                  <img src={routine.imageUrl} alt="" />
              </div>
              <span className={styles.detailsOverlay}>{routine.duration} ||| {routine.difficulty}</span>
            </div>
                        <div className={styles.routineBody}>
              <div className={styles.routineText}>
                <p className={styles.categoryLabel}>{routine.category}</p>
                <h2 className={styles.cardTitle}>{routine.title}</h2>
              </div>
              <div className={styles.trainerInfo}>
                <p className={styles.trainerName}>{routine.trainer}</p>
                {/* Место для фото тренера */}
                <img src={routine.trainerImageUrl} alt={routine.trainer} className={styles.trainerImage} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section16;
