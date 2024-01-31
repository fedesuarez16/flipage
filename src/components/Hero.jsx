import styles from "../style";
import React from 'react';

import { discount, robot, logoA } from "../assets";
import GetStarted from "./GetStarted";
import { motion, useAnimation  } from 'framer-motion';
import { fadeIn } from './variants'

const Hero = () => {
  

  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({ scale: .9 , opacity: 2 });
  }, [controls]);


 const fadeInAnimationVariants = {
  initial:{
    opacity: 0,
    y: 200
  },
  animate: {
    opacity: 1,
    y:0,
    transition: {
      delay: 1
    }
  },
 }

  return (
    <div id="home"    className={`bg-center bg-cover   px-4 `}>


      <motion.div 
            initial={{ scale: 1, opacity: 0 }}
            animate={controls}
            transition={{ duration: 1.5 }} 
           className={`text-center mx-auto max-w-[9000px] w-full`}>
        <div 
         className=" w-full ss:-mt-12">
          <div>
          <h1
           className={`font-poppins font-semibold ss:text-[70px]   text-[52px] text-white ss:leading-[88.8px] leading-[75px] md:text-center`}>
            Proveemos 
            <span className=" ss:text-[80px] font-bold text-[62px]"> Calidad</span>
          </h1>
          <h1 
           className="font-poppins font-semibold ss:text-[75px] text-[52px] text-white ss:leading-[84.8px] leading-[75px] w-full">
          Desde la Raiz
        </h1>
        </div>
        </div>
        <div className="border-t-[1.5px] border-zinc-200  w-44  ss:w-[360px] mx-auto my-2"></div>


        <div className="">
       
        <p className={`${styles.paragraph}  mb-8 mt-5`}>
           ¡Descubre la calidad y la excelencia en cada corte! Tu socio confiable en materiales de construcción. 

           <div className="mx-auto xl:hidden py-[6px] max-w-[200px] ss:w-full text-center m-4 border-[2px] border-green-600 hover:bg-green-600 transition-all duration-500 rounded-[10px] mb-2">
      <a href="#features" className={`${styles.paragraph} w-full hover:text-black `}>
        🌲 <b>Comenzar</b>
      </a>
    </div>
        </p>

        </div>
      

        
      </motion.div>

      </div>
 
  );
};

export default Hero;
