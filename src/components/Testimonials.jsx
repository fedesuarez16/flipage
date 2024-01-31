import { feedback } from "../constants";
import { Link, useNavigate } from 'react-router-dom';
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { motion } from 'framer-motion';
import { fadeIn } from './variants'


const Testimonials = () => (

<section>
<div className='bg-zinc-600 text-white flex flex-col mx-auto justify-center sm:flex-row  py-2'>
        <a  href="https://wa.me/5491138724252?text=Hola!%20Soy%20Construtora" target="_blank" 
         className=' sm:text-left mb-2 sm:mb-0'>¿Sos empresa constructora? Habla con nosotros →</a>
      </div>
      <p className='bg-green-500 h-[4px]'></p>

  <div id="clients" className={`${styles.paddingY} mx-auto  flex-col relative `}>
       
    <div className="absolute z-[0] w-full h-[60%]   rounded-full blue__gradient bottom-40" />

    <motion.div 
     variants={fadeIn('right', 0.3)}
     initial='hidden'
     whileInView={'show'}
     viewport={{once: false, amount: 0.3}}
    className="w-full text-center  flex justify-between p-4 items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Nuestros  <br className="sm:block hidden" /> Valores
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left `}>
          Nuestro trabajo y visión estan basados sobre estos tres pilares; Calidad, Atención y Confianza.
        </p>
      </div>
    </motion.div>

    <motion.div
   
     className="flex flex-wrap p-2 sm:justify-center justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </motion.div>
  </div>
  <p className='bg-green-500 h-[5px]'></p>

  </section>
);

export default Testimonials;
