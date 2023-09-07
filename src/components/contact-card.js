import React from 'react'

const ContactCard = () => {
  return (
    <div className="rounded-3xl bg-black text-white">
        <div className="flex flex-col items-start p-20">
            <p className="text-2xl">Have a project in mind?</p>
            <p className="text-5xl mt-7 mb-12">We’d love to work with you.</p>
            <a href="/contact"><button className="px-8 py-3 text-lg mr-2 bg-white text-black">Contact Us</button></a>
            
        </div>
    </div>
  )
}

export default ContactCard