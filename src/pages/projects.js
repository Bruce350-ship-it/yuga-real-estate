import React from 'react'
import { Header, Footer, ContactCard } from '../components'
import property_2 from '../Stock/pexels-max-rahubovskiy-7031406.jpg'
import property_1 from '../Stock/pexels-ion-ceban-ionelceban-4876018.jpg'
import property_4 from '../Stock/pexels-allyson-salness-8288954.jpg'
import property_3 from '../Stock/pexels-clay-elliot-5524165.jpg'
import property_5 from '../Stock 2/pexels-david-underland-3239895.jpg'
import property_6 from '../Stock 2/pexels-expect-best-323775.jpg'

const Projects = () => {
  return (
    <div className=''>
      <Header />
      <div className="mx-14">
        <h1 className="text-6xl font-medium tracking-wider my-20">Projects</h1>
        <p className="text-2xl mb-12">We change lives for the better by creating places and spaces that have a positive impact on the people who use them and the environment that surrounds them.</p>
        <div className="flex flex-col gap-10 mb-20">
          <div className="flex gap-7">
              <div className="w-1/3">
                <div><img src={property_1} alt="Pic_1" className="w-full rounded-tl" /></div>
                <div className=""><p className="text-lg mt-1">Trnava, Slovakia</p></div>
              </div>
              <div className="w-2/3">
                <div><img src={property_2} alt="Pic_1" className="w-full rounded-tr" /></div>
                <div className=""><p className="text-lg mt-1">Tehran, Iran</p></div>
              </div>
          </div>
          <div className="flex gap-7">
              <div className="w-2/3">
                <div><img src={property_3} alt="Pic_1" className="w-full rounded-bl" /></div>
                <div className=""><p className="text-lg mt-1">Münster, Germany</p></div>
              </div>
              <div className="w-1/3">
                <div><img src={property_4} alt="Pic_1" className="w-full rounded-br" /></div>
                <div className=""><p className="text-lg mt-1">Beijing, China</p></div>
              </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-7 mb-28">
          <div className="flex flex-col w-1/2">
            <img src={property_5} alt="Pic_1" className="w-full" />
            <p className="text-lg mt-1">Valencia, Spain</p>
          </div>
          <div className="flex flex-col w-1/2">
            <img src={property_6} alt="Pic_1" className="w-full" />
            <p className="text-lg mt-1">Turin, Italy</p>
          </div>
        </div>

        <div className="my-28"><a className="hover:underline hover:cursor-pointer" href="/akaido"><h1 className="text-3xl">View <strong>The Akaido, Khale</strong> project &rarr;</h1></a></div>
        

        <ContactCard />
      </div>
      <Footer />
    </div>
  )
}

export default Projects