import React from 'react'
import arch from '../Stock/pexels-artem-lupanchuk-866868.jpg'

const Donation = () => {
  return (
    <div className="rounded-3xl bg-black text-white flex">
      <div className="flex flex-col items-start p-20 w-2/3">
        <h1 className="text-3xl tracking-widest">YUGA<br />FOUNDATION</h1>
        <p className="text-lg my-7">We started a foundation to act as the company’s charitable arm almost 20 years ago. Since then, we have created dozens of community spaces that improve the living conditions for those in need across more than 12 countries.</p>
        <p className="text-lg">Help us build a better world by supporting our foundation today.</p>
        <div className='mt-8'>
          <button className="px-8 py-3 text-lg mr-2 bg-white text-black">$10</button>
          <button className="px-8 py-3 text-lg mr-2 bg-white text-black">$20</button>
          <button className="px-8 py-3 text-lg mr-2 bg-white text-black">$30</button>
          <button className="px-8 py-3 text-lg mr-2 bg-white text-black">Other</button>
        </div>
      </div>
      <div className="w-1/3"><img src={arch} alt="arch"  className="rounded-r-3xl"/></div>
    </div>
  )
}

export default Donation