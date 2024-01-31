import React from 'react'
import Deck1 from '../assets/deck/deck1.png'
import Deck2 from '../assets/deck/deck2.png'
import Deck3 from '../assets/deck/deck3.png'
import Deck4 from '../assets/deck/deck4.png'
import Deck5 from  '../assets/deck/deck5.png'
import Pergola from  '../assets/deck/pergola.png'
import Pergola2 from  '../assets/deck/pergola 2.png'
import Pergola3 from  '../assets/deck/pergola3.png'
import { logoA } from '../assets';






// this component is actually pergolas/deck

const Blanda = () => {
  return (
    <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Deck1}/>
          </a>
          <div class="mt-4">
            <h2 class="text-gray-900 title-font text-lg font-medium"></h2>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Deck2}/>
          </a>
          <div class="mt-4">
            <h2 class="text-gray-900 title-font text-lg font-medium"></h2>
            
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Deck3}/>
          </a>
          <div class="mt-4">
            <h2 class="text-gray-900 title-font text-lg font-medium"></h2>
            
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Deck4}/>
          </a>
          <div class="mt-4">
            <h2 class="text-gray-900 title-font text-lg font-medium"></h2>
            
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Deck3}/>
          </a>
          <div class="mt-4">
            <h2 class="text-gray-900 title-font text-lg font-medium"></h2>
            
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Deck5}/>
            <img alt="watermark" className="watermark " src={logoA} />
          </a>
          <div class="mt-4">
            <h2 class="text-gray-900 title-font text-lg font-medium"></h2>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Pergola}/>
            <img alt="watermark" className="watermark " src={logoA} />
          </a>
          <div class="mt-4">
            <h2 class="text-gray-900 title-font text-lg font-medium"></h2>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Pergola2}/>
            <img alt="watermark" className="watermark " src={logoA} />
          </a>
          <div class="mt-4">
            <h2 class="text-gray-900 title-font text-lg font-medium"></h2>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Pergola3}/>
            <img alt="watermark" className="watermark " src={logoA} />
          </a>
          <div class="mt-4">
            <h2 class="text-gray-900 title-font text-lg font-medium"></h2>
          </div>
        </div>
      
        
        </div>
      
    </div>
  </section>
  )
}

export default Blanda