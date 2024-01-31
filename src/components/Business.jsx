import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from 'framer-motion';
import { fadeIn } from './variants'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} `}>
    <motion.div
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
     className={`w-[64px] h-[64px] border-[2px] border-green-400 rounded-full ${styles.flexCenter} bg-zinc-200`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </motion.div>
    <motion.div 
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
    className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-zinc-900 text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-zinc-900 text-[16px] leading-[24px]">
        {content}
      </p>
    </motion.div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    
    <motion.div
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
     className={`${layout.sectionInfo}  `}>
      <h2 className={`text-zinc-900 ${styles.heading2}`}>
        Brindando La Mejor <span className="font-bold text-zinc-600 ss:text-[55px]"> Madera </span>   
       Del Mercado
      </h2>
      <p className={`${styles.paragraph} text-zinc-900 max-w-[470px] mt-5`}>
      Donde la calidad se encuentra con la naturaleza. Descubre la excelencia en cada corte en nuestro aserradero.
      </p>

      <Button styles={`mt-10`} />
    </motion.div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
