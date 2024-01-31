import Cimage from '../assets/bg-cons.png'
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './variants';

const Constructora = () => {
  return (
    <section  >
      <p className='bg-zinc-900 h-[10px]'></p>
      <p className='bg-green-500 h-[5px]'></p>

      <div className=' flex flex-col lg:flex-row  justify-center items-center h-screen bg-cons'>
        {/* Image Section */}
        <motion.div className='lg:w-full h-full overflow-hidden'>
          {/* Replace 'your_image_url' with the actual URL of your image */}
          <img src={Cimage} alt='Construction Image' className='object-cover bg-fixed brightness-50 w-full h-full' />
        </motion.div>

        {/* Text and Button Section */}
        <motion.div className='lg:w-1/2 p-8'>
          
          <div className='border-t-3 border-green-500 h-4 w-44 mx-auto my-2'></div>

          <div className='text-center'>
            <motion.h1
              variants={fadeIn('left', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='font-poppins font-semibold ss:text-[35px] text-[28px] text-white ss:leading-[40px]'
            >
              Tu Socio en <span className='font-bold '>Maderas</span> <br /> de Exelencia para Empresas{' '}
              <span className='text-gradient font-bold'> Constructoras</span>
            </motion.h1>

            <motion.p
              variants={fadeIn('left', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='text-zinc-400 ss:p-4'
            >
              "Abastecemos a empresas constructoras con maderas de primera calidad, ofreciendo
              soluciones duraderas para proyectos excepcionales. Nuestra dedicación es construir
              juntos un futuro sólido y exitoso."
            </motion.p>
          </div>
          <motion.div
             variants={fadeIn('left', 0.3)}
             initial='hidden'
             whileInView={'show'}
             viewport={{ once: false, amount: 0.3 }}
           className='bg-zinc-900 rounded-lg text-center border-4 border-zinc-700 p-2 text-white mb-4'>
            <a
              href='https://wa.me/5491138724252?text=Hola!%20Soy%20Constructora'
              target='_blank'
              className=' mx-auto sm:mb-0'
            >
              ¿Sos empresa constructora? <br /> Habla con nosotros →
            </a>
          </motion.div>
        </motion.div>
        
      </div>
      <p className='bg-zinc-900 h-[10px]'>.</p>
      <p className='bg-green-500 h-[4px]'></p>
    </section>
  );
};

export default Constructora;








// import React from 'react';
// import { motion } from 'framer-motion';
// import { fadeIn } from './variants'

// const Constructora = () => {
//   return (

//     <section>
//  <p className='bg-zinc-900 h-[10px]'></p>
//       <p className='bg-green-500 h-[5px]'></p>
        
//     <div    className='flex flex-col justify-center items-center h-screen bg-cons'>
        
//       <div className='bg-zinc-900 rounded-lg border-4  border-zinc-700 p-2 text-white flex flex-col mx-auto justify-center sm:flex-row py-2'>
//         <a href="https://wa.me/5491138724252?text=Hola!%20Soy%20Constructora" target="_blank" className='sm:text-center text-center  sm:mb-0'>
//           ¿Sos empresa constructora? Habla con nosotros →
//         </a>
//       </div>
//       <p className='bg-zinc-900 h-[10px]'>.</p>
//       <div className="border-t-[3px] border-green-500 h-4  w-44 mx-auto my-2"></div>
//       <div className='text-center -44'>
//         <motion.h1 
//         variants={fadeIn('right',0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.3}}
//         className='font-poppins  font-semibold ss:text-[70px] text-[40px] text-white  ss:leading-[88px]'>
//           Tu Socio en <span className='font-bold '>Maderas</span> <br /> de Calidad para Empresas <span className='text-gradient font-bold'> Constructoras</span> 
//         </motion.h1>
        
//         <motion.p
        
//          className='text-zinc-400  ss:p-14'>
// "Abastecemos a empresas constructoras con maderas de primera calidad, ofreciendo soluciones duraderas para proyectos excepcionales. Nuestra dedicación es construir juntos un futuro sólido y exitoso."
//         </motion.p>
//       </div>
//     </div  >
//     <p className='bg-zinc-900 h-[10px]'>.</p>
//     <p className='bg-green-500 h-[4px]'></p>


//     </section>
//   );
// };

// export default Constructora;

