import React from 'react'
import { Subnavbar } from './Subnavbar'
import Footer from './Footer'
import anchico from '../assets/duras/anchico.png'
import Grapia from '../assets/duras/grapia.svg'
import Guayubira from '../assets/duras/guayubira.svg'
import Hovenia from '../assets/duras/hovenia.svg'
import Incienso from '../assets/duras/incienso.png'
import Lapacho from '../assets/duras/lapacho.png'
import Virapita from '../assets/duras/virapita.png'
import Algarrobo from '../assets/duras/algarrobo.svg'
import { logoA } from '../assets';






const Dura = () => {
  return (
    <section>

    <Subnavbar/>

<div class="text-gray-600 body-font">
<div class="container px-5 py-24 mx-auto">
<div class="flex flex-wrap -m-4">
  <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    <a class="block relative h-48 rounded overflow-hidden">
      <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Hovenia}/>
      <img alt="watermark" className="watermark " src={logoA} />

    </a>
    <div class="mt-4">
      <h2 class="text-gray-900 title-font text-lg font-medium">Hovenia</h2>
    </div>
  </div>
  <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    <a class="block relative h-48 rounded overflow-hidden">
      <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Guayubira}/>
      <img alt="watermark" className="watermark " src={logoA} />

    </a>
    <div class="mt-4">
      <h2 class="text-gray-900 title-font text-lg font-medium">Guayubira</h2>
    </div>
  </div>
  <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    <a class="block relative h-48 rounded overflow-hidden">
      <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Grapia}/>
      <img alt="watermark" className="watermark " src={logoA} />

    </a>
    <div class="mt-4">
      <h2 class="text-gray-900 title-font text-lg font-medium">Grapia</h2>
    </div>
  </div>
  <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    <a class="block relative h-48 rounded overflow-hidden">
      <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Lapacho}/>
      <img alt="watermark" className="watermark " src={logoA} />

    </a>
    <div class="mt-4">
      <h2 class="text-gray-900 title-font text-lg font-medium">Lapacho</h2>
    </div>
  </div>

  <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    <a class="block relative h-48 rounded overflow-hidden">
      <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Incienso}/>
      <img alt="watermark" className="watermark " src={logoA} />

    </a>
    <div class="mt-4">
      <h2 class="text-gray-900 title-font text-lg font-medium">Incienso</h2>
    </div>
  </div>
  <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    <a class="block relative h-48 rounded overflow-hidden">
      <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={anchico}/>
      <img alt="watermark" className="watermark " src={logoA} />

    </a>
    <div class="mt-4">
      <h2 class="text-gray-900 title-font text-lg font-medium">Anchico</h2>
    </div>
  </div>
  <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    <a class="block relative h-48 rounded overflow-hidden">
      <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Algarrobo}/>
      <img alt="watermark" className="watermark " src={logoA} />

    </a>
    <div class="mt-4">
      <h2 class="text-gray-900 title-font text-lg font-medium">Algarrobo</h2>
    </div>
  </div>
  
  
 
 
  
</div>
</div>
</div>

<Footer/>
</section>
  )
}

export default Dura