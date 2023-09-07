import React from 'react'
import { Header, Footer } from '../components'
import news_1 from '../Stock 2/News/pexels-longxiang-qian-1849112.jpg'
import news_2 from '../Stock 2/News/pexels-expect-best-323780.jpg'
import news_3 from '../Stock 2/News/pexels-expect-best-323776.jpg'
import news_4 from '../Stock 2/News/pexels-max-rahubovskiy-7031408.jpg'
import news_5 from '../Stock 2/News/pexels-fuzail-ahmad-2792601.jpg'
import news_6 from '../Stock 2/News/pexels-brett-sayles-12993967.jpg'
import news_7 from '../Stock 2/News/pexels-nothing-ahead-3460599.jpg'
import news_8 from '../Stock 2/News/pexels-expect-best-323772.jpg'

const NewsPage = () => {
  return (
    <div className=''>
      <Header />
      <div className='mx-14'>
        <h1 className='text-6xl my-20'>News</h1>
        <div className="flex flex-col gap-16 mt-10 mb-28">
          <div className="flex gap-8">
            <div className="w-1/4">
              <div><img src={news_1} alt="Pic_1" className="w-full" /></div>
              <div className="mt-5"><a className="text-lg leading-3 hover:underline hover:cursor-pointer">The Vertical Forest, a Model for a Sustainable Residential Building in Milan</a></div>
            </div>
            <div className="w-1/4">
              <div><img src={news_2} alt="Pic_2" className="w-full" /></div>
              <div className="mt-5"><a className="text-lg leading-3 hover:underline hover:cursor-pointer">Wildflower Market, Transformation of the North End of the Street</a></div>
            </div>
            <div className="w-1/4">
              <div><img src={news_3} alt="Pic_3" className="w-full" /></div>
              <div className="mt-5"><a className="text-lg leading-3 hover:underline hover:cursor-pointer">Exmouth Shortlisted for the People’s Choice in the West Sussex Architecture Awards 2022</a></div>
            </div>
            <div className="w-1/4">
              <div><img src={news_4} alt="Pic_4" className="w-full" /></div>
              <div className="mt-5"><a className="text-lg leading-3 hover:underline hover:cursor-pointer">Best Single Residence Award for Yuga Architects</a></div>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="w-1/4">
              <div><img src={news_5} alt="Pic_1" className="w-full" /></div>
              <div className="mt-5"><a className="text-lg leading-3 hover:underline hover:cursor-pointer">Building and Architect of the Year 2022</a></div>
            </div>
            <div className="w-1/4">
              <div><img src={news_6} alt="Pic_2" className="w-full" /></div>
              <div className="mt-5"><a className="text-lg leading-3 hover:underline hover:cursor-pointer">Our Ten Favourite Buildings</a></div>
            </div>
            <div className="w-1/4">
              <div><img src={news_7} alt="Pic_3" className="w-full" /></div>
              <div className="mt-5"><a className="text-lg leading-3 hover:underline hover:cursor-pointer">Planning Success for East One Shopping Center</a></div>
            </div>
            <div className="w-1/4">
              <div><img src={news_8} alt="Pic_4" className="w-full" /></div>
              <div className="mt-5"><a className="text-lg leading-3 hover:underline hover:cursor-pointer">New Mixed Use Commercial and Residential Development at Lindfield</a></div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-black text-white">
          <div className="flex justify-around items-center p-20">
            <h1 className="text-5xl">Subscribe to<br /> our newsletter</h1>
            <div className="">
              <input className="px-7 py-5 text-black" placeholder='Type your Email...' type='text' />
              <button className="px-[27px] py-[19px] bg-blue-950 border border-solid border-white">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default NewsPage