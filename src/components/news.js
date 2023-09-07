import React from 'react'
import news_1 from '../Stock 2/News/pexels-longxiang-qian-1849112.jpg'
import news_2 from '../Stock 2/News/pexels-expect-best-323780.jpg'
import news_3 from '../Stock 2/News/pexels-expect-best-323776.jpg'
import news_4 from '../Stock 2/News/pexels-max-rahubovskiy-7031408.jpg'

const News = () => {
  return (
    <div className="my-40">
      <h2 className="text-6xl font-normal text-left mb-4">Recent News</h2>
      <a className="text-xl opacity-90 hover:underline hover:cursor-pointer" href="/news">View all News &rarr;</a>

      

      <div className="flex flex-col gap-16 mt-20">
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
      </div>
    </div>
  )
}

export default News