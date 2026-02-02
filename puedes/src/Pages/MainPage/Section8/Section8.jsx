import React from 'react';
import styles from './Section8.module.css';
import img1 from '../../../assets/1903e8d24cc2c7d3721ad2c7a24a57b539ddc8ce.jpg'
import img2 from '../../../assets/332aa9130f1c102660b0c60e824ca6666acb9b88.jpg'
import img3 from '../../../assets/e70d36f6fa5a0f846a01f7cc7f201d196889f252.jpg'
const Section8 = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.textContainer}>
        <div>
            <h2 className={styles.title}>#Achievers</h2>
            <p className={styles.description}>
              Somos una comunidad de mujeres que se esfuerza por ser su mejor versión, por mantenerse saludable, por dedicarle a su cuerpo por lo menos 15 minutos al día.
            </p>
        </div>
        <button className={styles.button}>Ver Eventos</button>
      </div>
      
      <div className={styles.imageGrid}>
        <div className={styles.imageContainer}>
          <img src={img1} alt="" />
          <div className={styles.imagePlaceholder}>Фото 1</div>
        </div>

        <div className={styles.imageContainer}>
           <img src={img2} alt="" />
           <div className={styles.imagePlaceholder}>Фото 2</div>
        </div>

        <div className={styles.imageContainer}>
           <img src={img3} alt="" />
           <div className={styles.imagePlaceholder}>Фото 3</div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
