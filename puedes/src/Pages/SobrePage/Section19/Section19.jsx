import React from 'react';
import styles from './Section19.module.css';

import mariaImg from '../../../assets/Rectangle 4178.png'; 
import merceImg from '../../../assets/Rectangle 4178 (1).png'; 

const Section19 = () => {
  return (
    <section className={styles.mainContainer}>
      <h1 className={styles.mainTitle}>Conoce a tus Entrenadoras</h1>
      
      <div className={styles.cardsContainer}>
        
        <div className={styles.card}>
          <div className={styles.imagePlaceholder}>
            <img src={mariaImg} alt="Maria" className={styles.trainerImage} />
          </div>
          
          <div className={styles.content}>
            <h2 className={styles.trainerName}>María</h2>
            <p className={styles.greeting}>Hola soy Maria,</p>
            <p className={styles.description}>
              Tengo treinta y un años y vivo en Guatemala. Soy abogada e instructora de yoga, llevo dando clases por más de siete años y es mi pasión.
            </p>
            <p className={styles.description}>
              Mi mayor logro y orgullo es mi familia, estoy casada desde hace 5 años y tengo tres hijas.
            </p>
            <p className={styles.description}>
              Soy cofundadora de @achieve_workouts junto a Mercedes y nuestra meta es que todas las mujeres puedan hacer ejercicio desde su casa con los hijos y la familia a lado.
            </p>
            <button className={styles.button}>Entrena con Maria</button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imagePlaceholder}>
             <img src={merceImg} alt="Merce" className={styles.trainerImage} />
          </div>
          
          <div className={styles.content}>
            <h2 className={styles.trainerName}>Merce</h2>
            <p className={styles.greeting}>Hola soy Merce,</p>
            <p className={styles.description}>
              Licenciada en Ciencias de la comunicación. Hija, esposa y mamá. Soy fitness coach certificada con más de 6 años de experiencia. Especialista en fitness pre y post natal.
            </p>
            <p className={styles.description}>
              Soy apasionada por llevar un estilo de vida saludable y contagiarle su pasión a otros para sentirse bien, llenarse de energia y disfrutar de los tantos beneficios que hacer ejercicio y ser saludables trae a nuestras vidas.
            </p>
            <button className={styles.button}>Entrena con Merce</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section19;
