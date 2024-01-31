import { stats } from "../constants";
import styles from "../style";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Link, useNavigate } from 'react-router-dom';



const Stats = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
    <section>
     
  <div ref={ref}  className={`${styles.flexCenter} p-12 flex-row flex-wrap   `}>
   
      <div  className={`flex-1 flex justify-center items-center flex-row m-3`} >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white"> + 
        {inView ? 
                <CountUp start={50} end={150} duration={2}/> :

              null }    
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">CLIENTES
        </p>
      </div>

      <div  className={`flex-1 flex justify-center items-center flex-row m-3`} >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">+
        {inView ? 
                <CountUp start={10} end={30} duration={2}/> :

              null }   
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3"> AÑOS DE TRAYECTORIA
        </p>
      </div>

      <div  className={`flex-1 flex justify-center items-center flex-row m-3`} >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">+
        {inView ? 
                <CountUp start={0} end={10} duration={2}/> :

              null }K
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3"> CORTES DE MADERA
        </p>
      </div>
    
  </div>

  <a href="https://wa.me/5491138724252?text=Hola!%20Soy%20Construtora" target="_blank" className='bg-zinc-600 text-white flex flex-col mx-auto justify-center sm:flex-row  py-2'>
        <p className=' sm:text-left mx-auto mb-2 sm:mb-0'>¿Sos empresa constructora? Hablemos →</p>
      </a>
      <p className='bg-green-500 h-[5px]'>.  .</p>

  </section>
  )
};

export default Stats;
