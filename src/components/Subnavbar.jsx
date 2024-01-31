import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Subnavbar = () => {
  return (
    <section>
      <div className=" bg-[url('./assets/hero.png')] bg-zinc-900 h-52 w-full">
        <h2 className='text-[60px] p-4 ss:text-[80px] text-white font-poppins font-semibold ml-4 sm:ml-12'>Catálogo</h2>
        <p className='text-zinc-400 pl-4 ss:ml-20 '>Proveyendo con los más altos stándares de calidad</p>
      </div>
      <nav className='flex bg-zinc-900 h-12 items-center'>
        <ul className='flex space-x-4 sm:space-x-8 mx-auto text-slate-200 text-[8px] ss:text-[15px] font-light uppercase'>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/semiduras">Maderas Semiduras</Link></li>
          <li><Link to="/duras">Maderas Duras</Link></li>
          <li><Link to="/techos">Techos y madera de obra</Link></li>
          <li><Link to="/blanda">Pérgolas/Deck</Link></li>

        </ul>
      </nav>
      
      <div className='bg-zinc-600 text-white flex flex-col mx-auto justify-center sm:flex-row  py-2'>
        <a  href="https://wa.me/5491138724252?text=Hola!%20Soy%20Construtora" target="_blank"  className=' sm:text-left mb-2 sm:mb-0'>¿Sos empresa constructora? Habla con nosotros →</a>
      </div>
      <p className='bg-green-500 h-[5px]'>.  </p>
    

    </section>
  );
};
