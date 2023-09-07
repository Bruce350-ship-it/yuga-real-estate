import React from 'react'
import { Header, Footer } from '../components'

const ContactPage = () => {
  return (
    <div className=''>
      <Header />
      <div className='mx-14'>
        <h1 className="text-7xl my-20">Contact</h1>
        <div className="w-5/6 mx-auto">
          <p className="text-xl mb-10 leading-8">Looking for a partner? We’d love to learn more about you and your vision. Please share some of your vision and any questions you have for us below and we’ll be in touch to move the conversation forward.</p>
          <div className="flex">
            <div className="w-1/2">
              <p className="text-base font-semibold">Address:</p>
              <p className="text-lg opacity-90">123 Example St, San Francisco,<br />CA 12345-6789</p>
            </div>
            <div className="w-1/2">
              <div>
                <p className="text-base font-semibold">Telephone:</p>
                <p className="text-lg opacity-90">123-456-7890</p>
              </div>
              <div>
                <p className="text-base font-semibold">Email:</p>
                <a className="text-lg opacity-90 hover:underline hover:cursor-pointer">contact@example.com</a>
              </div>
            </div> 
          </div>
          <div className="mt-8">
            <p className="text-base font-semibold">Name<span className="opacity-70">(required)</span></p>
            <input className="w-full border border-solid border-slate-300 px-6 py-4 mt-2 focus:outline-none" />
          </div>
          <div className="mt-8">
            <p className="text-base font-semibold">Email<span className="opacity-70">(required)</span></p>
            <input className="w-full border border-solid border-slate-300 px-6 py-4 mt-2 focus:outline-none" />
          </div>
          <div className="mt-8">
            <p className="text-base font-semibold">Subject<span className="opacity-70">(required)</span></p>
            <input className="w-full border border-solid border-slate-300 px-6 py-4 mt-2 focus:outline-none" />
          </div>
          <div className="mt-8">
            <p className="text-base font-semibold">Project Type<span className="opacity-70">(required)</span></p>
            <input className="w-full border border-solid border-slate-300 px-6 py-4 mt-2 focus:outline-none" />
          </div>
          <div className="mt-8">
            <p className="text-base font-semibold">Message<span className="opacity-70">(required)</span></p>
            <textarea className="w-full border border-solid border-slate-300 px-6 py-4 mt-2 focus:outline-none" rows="6" cols="1" />
          </div>
          <button className="px-5 py-3 mt-8 text-white bg-blue-950 hover:bg-black">Submit</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage