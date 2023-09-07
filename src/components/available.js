import React from 'react'
import property_2 from '../Stock/pexels-max-rahubovskiy-7031406.jpg'
import property_1 from '../Stock/pexels-ion-ceban-ionelceban-4876018.jpg'
import property_4 from '../Stock/pexels-allyson-salness-8288954.jpg'
import property_3 from '../Stock/pexels-clay-elliot-5524165.jpg'

const Available = () => {
  return (
    <div className='mt-16'>
      <h1 className="text-6xl font-medium leading-[70px] text-left">Yuga is an innovative firm with a focus on designing life-enhancing and genuinely sustainable architecture.</h1>
      <div className="flex flex-col gap-4 my-20">
        <div className="flex gap-5">
            <div className="w-1/3">
              <div><img src={property_1} alt="Pic_1" className="w-full rounded-tl" /></div>
              <div className=""><p className="text-base mt-1">Trnava, Slovakia</p></div>
            </div>
            <div className="w-2/3">
              <div><img src={property_2} alt="Pic_1" className="w-full rounded-tr" /></div>
              <div className=""><p className="text-base mt-1">Tehran, Iran</p></div>
            </div>
        </div>
        <div className="flex gap-5">
            <div className="w-2/3">
              <div><img src={property_3} alt="Pic_1" className="w-full rounded-bl" /></div>
              <div className=""><p className="text-base mt-1">Münster, Germany</p></div>
            </div>
            <div className="w-1/3">
              <div><img src={property_4} alt="Pic_1" className="w-full rounded-br" /></div>
              <div className=""><p className="text-base mt-1">Beijing, China</p></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Available