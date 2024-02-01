import styles from "../style";
import { logoA } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import Map from './Map'

const Footer = () => (

  <section >

      <p className='bg-zinc-600 h-[5px]'></p>
        <Map/>


    <div className={`${styles.flexCenter} ${styles.paddingY} p-4 flex-col bg-zinc-950 `}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full text-center `}>
      <div className="flex-[1]  flex flex-col justify-start mr-10">
        <img
          src={logoA}
          alt="hoobank"
          className="w-[350px] h-[120.14px] mx-auto object-contain"
        />
        <p className={`${styles.paragraph} mt-4 font-semibold mx-auto max-w-[312px]`}>
        Brindando
Calidad
desde la raiz
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[14px] leading-[24px] text-dimWhite  ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">

      <p className="font-poppins font-normal text-center text-[14px] leading-[27px] text-white">
        Copyright Ⓒ 2023 Aserradero San Vicente. Hecho por <a href="https://flipwebco.com/" className="text-slate-500">@FlipWebCo.  </a> Todos los derechos reservados.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
  {socialMedia.map((social, index) => (
    <img
      key={social.id}
      src={social.icon}
      alt={social.id}
      className={`w-[70px] h-[60px] object-contain cursor-pointer ${
        index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
      }`}
      onClick={() => window.open(social.link)}
    />
  ))}
</div>
    </div>
    </div>
  </section>
);

export default Footer;
