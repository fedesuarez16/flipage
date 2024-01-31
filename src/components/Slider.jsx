import React, { useState, useEffect } from 'react';
import Button from './Button';
import './slider.css';
import Img1 from '../assets/wood1.png';
import Img2 from '../assets/wood2.png';
import Img3 from '../assets/wood3.png';
import Img4 from '../assets/wood4.png'
import { motion } from 'framer-motion';
import { fadeIn } from './variants'
import Cbutton from './Cbutton';



export const Slider = () => {
  const options = ['Maderas semiduras', 'Deck', 'Maderas duras', 'Otros'];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = options.indexOf(selectedOption);
      const nextIndex = (currentIndex + 1) % options.length;
      handleOptionChange(options[nextIndex]);
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount

  }, [selectedOption, options]);

  const getContent = () => {
    switch (selectedOption) {
      case 'Maderas semiduras':
        return {
          title: 'Maderas semiduras',
          text: 'Maderas semiduras, como roble y caoba, no son coníferas ni de hojas caducas. Con estructura celular intermedia, ofrecen resistencia y facilidad de trabajo, ideales para carpintería ',
          imageUrl: Img2
        };
      case 'Deck':
        return {
          title: 'Deck',
          text: 'La elección perfecta para tus proyectos al aire libre. Nuestras maderas para deck y pérgolas combinan durabilidad, resistencia y belleza natural para espacios exteriores extraordinarios.',
          imageUrl: Img1
        };
       
      case 'Maderas duras':
        return {
          title: 'Maderas duras',
          text:  'Maderas duras como roble, nogal y caoba, provenientes de árboles frondosos, se destacan por su densa estructura y resistencia. Ideal para muebles finos y suelos de calidad.',
          imageUrl: Img4,
        };
        case 'Otros':
          return {
            title: 'Otros',
            text: 'Consegui todo para tu techo. Desde vigas, tirantes, columnas, alfajias, hasta ruberoy y aislantes. La mejor eleccion para la construccion de techos',
            imageUrl: Img1,
          };
      
      default:
        return null;
    }
  };

  const content = getContent();

  return (

<section id='product'>
<motion.div
  variants={fadeIn('left', 0.3)}
  initial='hidden'
  whileInView={'show'}
  viewport={{ once: false, amount: 0.3 }}
  className='text-center'
>
  <h1 className='font-semibold ss:ml-40 ss:mr-40 mt-12 ss:mt-4 text-[30px] ss:text-[50px] ss:leading-[1]'>
    Contamos Con Una Amplia <span className='font-bold text-zinc-600 ss:text-[65px]'>Variedad</span> De{' '}
    <span className='text-gradient font-bold ss:text-[60px]'>Maderas</span> y Cortes
  </h1>
  <p className='m-12 ss:text-[18px] ss:ml-44 ss:mr-44 text-slate-600'>{content?.text}</p>
</motion.div>

    <motion.div
     variants={fadeIn('right', 0.3)}
     initial='hidden'
     whileInView={'show'}
     viewport={{ once: false, amount: 0.3 }}
     className='circular-slider ss:h-[370px] font-poppins'>
        <div className='slider'>
          <div className='indicator'> </div>
          <div className='another-indicator'></div>
          <div className='third-indicator'> </div>
          <div className='fourth-indicator'> </div>
          <div className='fifth-indicator'> </div>

          <div className='menu text-[12px]  font-semibold'>
            {options.map((option) => (
              <div key={option}>
                <span onClick={() => handleOptionChange(option)}>{option}</span>
              </div>
            ))}
          </div>
          <div className='img' style={{ backgroundImage: `url(${content?.imageUrl})` }}></div>
        </div>
        <motion.div
           variants={fadeIn('right', 0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.3}}
           className='-mb-4'
        >
      <Cbutton/>
      </motion.div>
    </motion.div>
    </section>
  );
};

export default Slider;
