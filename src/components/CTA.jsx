import styles from "../style";
import Button from "./Button";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from './variants'


const CTA = () => (
  <section>
  <motion.div 
    variants={fadeIn('right', 0.1)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.3}}
  className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row border-4  border-zinc-400  flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <p className="text-gradient font-regular font-semibold" >HABLÁ CON NOSOTROS</p>
      <h2 className={styles.heading2}>Solicita tu presupuesto!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       Habla con nosotros y recibe un asesoramiento personalizado acerca de nuestros productos
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
    </motion.div>
  </section>

);

export default CTA;
