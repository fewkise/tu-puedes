
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Section5.module.css';
import img1 from '../../../assets/4f1df556-d2f6-44af-9426-0ab453ad648f (1).png'
const sliderItems = [
       {
    type: 'quote',
    text: 'Quiero agradecerles los regalos del primer lugar del reto 15X15. ¡Geniales! El viernes, al llegar a casa, me esperaba el tercero. Wow Por sobre esto, les agradezco el haberme regresado a la autodisciplina. La disciplina s forja de fuera hacia dentro y... la reecontré gracias al programa y al reto. Al borde de lo sesenta, gracias por mantenerme ejercitad con buen estilo de vida. Las quiero muuueu chicas emprendedoras y cariñosas. Fuerte abrazo y a por el siguiente bloque: "summer ready"!',
  },
       {
    type: 'quote',
    text: 'Quiero agradecerles los regalos del primer lugar del reto 15X15. ¡Geniales! El viernes, al llegar a casa, me esperaba el tercero. Wow Por sobre esto, les agradezco el haberme regresado a la autodisciplina. La disciplina s forja de fuera hacia dentro y... la reecontré gracias al programa y al reto. Al borde de lo sesenta, gracias por mantenerme ejercitad con buen estilo de vida. Las quiero muuueu chicas emprendedoras y cariñosas. Fuerte abrazo y a por el siguiente bloque: "summer ready"!',
  },
     {
    type: 'quote',
    text: 'Quiero agradecerles los regalos del primer lugar del reto 15X15. ¡Geniales! El viernes, al llegar a casa, me esperaba el tercero. Wow Por sobre esto, les agradezco el haberme regresado a la autodisciplina. La disciplina s forja de fuera hacia dentro y... la reecontré gracias al programa y al reto. Al borde de lo sesenta, gracias por mantenerme ejercitad con buen estilo de vida. Las quiero muuueu chicas emprendedoras y cariñosas. Fuerte abrazo y a por el siguiente bloque: "summer ready"!',
  },
  {
    type: 'quote',
    text: 'Quiero agradecerles los regalos del primer lugar del reto 15X15. ¡Geniales! El viernes, al llegar a casa, me esperaba el tercero. Wow Por sobre esto, les agradezco el haberme regresado a la autodisciplina. La disciplina s forja de fuera hacia dentro y... la reecontré gracias al programa y al reto. Al borde de lo sesenta, gracias por mantenerme ejercitad con buen estilo de vida. Las quiero muuueu chicas emprendedoras y cariñosas. Fuerte abrazo y a por el siguiente bloque: "summer ready"!',
  },
  {
    type: 'image-pair',
    imageUrl:img1, 
    label: '3 semanas usando Achieve',
  },
   {
    type: 'quote',
    text: 'Quiero agradecerles los regalos del primer lugar del reto 15X15. ¡Geniales! El viernes, al llegar a casa, me esperaba el tercero. Wow Por sobre esto, les agradezco el haberme regresado a la autodisciplina. La disciplina s forja de fuera hacia dentro y... la reecontré gracias al programa y al reto. Al borde de lo sesenta, gracias por mantenerme ejercitad con buen estilo de vida. Las quiero muuueu chicas emprendedoras y cariñosas. Fuerte abrazo y a por el siguiente bloque: "summer ready"!',
  },
];


const Section5 = () => {
  return (
    <div className={styles.sliderContainerWrapper}>
      <p style={{fontSize:'42px', color:'#343354', fontWeight:'600'}}>Descubre una comunidad de mente sana y cuerpo sano</p>
      <Swiper
        spaceBetween={30}
        slidesPerView={'auto'}
        loop={true}
        className={styles.mySwiper}
      >
        {sliderItems.map((item, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.slideContent}>
              {item.type === 'content' && (
                <>
                  <div className={styles.titleContainer}>
                    <h1 className={styles.mainTitle}>{item.mainTitle} <br />{item.category}</h1>
                    <div className={styles.trainerInfo}>
                      <p className={styles.trainerName}>{item.trainerName}</p>
                      <div className={styles.trainerIcon} style={{ backgroundImage: `url(${item.trainerIconUrl})` }}></div>
                    </div>
                  </div>

                  <div className={styles.infoSection}>
                    <p className={styles.sectionTitle}>INFORMACIÓN</p>
                    <p className={styles.description}>{item.description}</p>
                  </div>

                  <div className={styles.infoSection}>
                    <p className={styles.sectionTitle}>EQUIPO</p>
                    <div className={styles.gridContainer}>
                      {item.equipment.map((equip) => (
                        <div key={equip.name} className={styles.card}>
                          <img src={equip.iconUrl} alt={equip.name} className={styles.icon} />
                          <div className={styles.label}>{equip.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button className={styles.startButton}>Entrena con Maria</button>
                </>
              )}

              {item.type === 'image-pair' && (
                <div className={styles.imageContainer}>
                    <div className={styles.imageLabel}>{item.label}</div>
                    <img src={item.imageUrl} alt="Before/After" className={styles.beforeAfterImage} />
                </div>
              )}

               {item.type === 'quote' && (
                <div className={styles.quoteContainer}>
                    <span className={styles.quoteIcon}>“</span>
                    <p className={styles.quoteText}>{item.text}</p>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Section5;
