import React from 'react'
import { Header, Footer, ContactCard } from '../components'
import akaido_pic from '../Stock 2/pexels-binyamin-mellish-106399.jpg'
import pic_1 from '../Stock 2/pexels-tobias-bjørkli-2119714.jpg'
import pic_2 from '../Stock 2/pexels-photomix-company-565324.jpg'
import pic_3 from '../Stock 2/Interior/pexels-naim-benjelloun-2030037.jpg'
const Akaido = () => {
  return (
    <div className="">
      <Header />
      <div className="mx-14">
        <img src={akaido_pic} alt="akaido-pic" className='w-full' />
        <h1 className='text-6xl my-20'>The Akaido, Khale</h1>

        <div className="flex gap-7">
          <div className="w-2/3">
            <p className="text-2xl">Since the 1980s, as the complexity of buildings began to increase (in terms of structural systems, services, energy and technologies), the field of architecture became multi-disciplinary with specializations for each project type, technological expertise or project delivery method.</p>
            <p className="text-2xl my-10">Moreover, there has been an increased separation of the design architect from the project architect who ensures that the project meets the required standards and deals with matters of liability.</p>
            <p className="text-2xl">The preparatory processes for the design of any large building have become increasingly complicated, and require preliminary studies of such matters as durability, sustainability, quality, money, and compliance with local laws.</p>
          </div>
          <div className="flex gap-5 w-1/3">
            <div className="w-1/2">
              <div className="">
                <p className="text-base font-semibold">Location</p>
                <hr className="border-y border-black my-1" />
                <p className="text-base">Khale, UK</p>
              </div>
              <div className="">
                <p className="text-base font-semibold">Project Type</p>
                <hr className="border-y border-black my-1" />
                <p className="text-base">New Construction</p>
              </div>
              <div className="">
                <p className="text-base font-semibold">Sustainability</p>
                <hr className="border-y border-black my-1" />
                <p className="text-base">LEED platinum</p>
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <p className="text-base font-semibold">Client</p>
                <hr className="border-y border-black my-1" />
                <p className="text-base">Adrienne</p>
              </div>
              <div className="">
                <p className="text-base font-semibold">Category</p>
                <hr className="border-y border-black my-1" />
                <p className="text-base">Residencial</p>
              </div>
              <div className="">
                <p className="text-base font-semibold">Size</p>
                <hr className="border-y border-black my-1" />
                <p className="text-base">23,000m²</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-20 mr-28 ml-16 my-40">
          <div className="flex flex-col w-2/5 px-12">
            <img src={pic_1} alt="pic-1" className="" />
            <p className="leading-8 mt-3">“Centuries later, Leon Battista Alberti developed his ideas further, seeing beauty as an objective quality of buildings to be found in their proportions.”</p>
          </div>
          <div className="flex flex-col-reverse w-3/5"><img src={pic_2} alt="pic-2" className="" /></div>
        </div>

        <div className="flex flex-row-reverse">
          <div className="w-4/5">
            <p className="text-2xl mb-10">Among the philosophies influencing modern architects and their approach to building design are Rationalism, Empiricism, Structuralism, Poststructuralism, Deconstruction and Phenomenology.</p>
            <p className="text-2xl">In the late 20th century, a new concept was added to those included in the compass of structure and function, considering sustainability, hence sustainable architecture. To satisfy the contemporary ethos, a building should be constructed in a manner which is environmentally friendly in terms of the production of its materials, its impact on the natural and built environment of its surrounding area and the demands that it makes upon non-sustainable power sources for heating, cooling, water and waste management, and lighting.</p>
          </div>
        </div>

        <img src={pic_3} alt="pic-3" className='w-2/3 mx-auto my-28' />

        <ContactCard />
      </div>
      <Footer />
    </div>
  )
}

export default Akaido