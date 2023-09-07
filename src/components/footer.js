import React from 'react'

const Footer = () => {
  return (
    <div className="flex justify-between py-12 px-16 mt-10">
      <div className="flex flex-col gap-3">
        <a className="text-lg font-semibold tracking-wider opacity-90 hover:cursor-pointer hover:underline" href="/home">YUGA</a>
        <p className="text-base mr-1.5">123 Example St, San Francisco, CA 12345-6789</p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-base font-semibold">If you have any questions, let us know.</p>
        <div className="flex">
          <p className="text-base mr-1.5">0123-456-7890</p>
          <a className="text-base mr-1.5 hover:cursor-pointer hover:underline">contact@example.com</a>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-base font-semibold">Follow us</p>
        <div className="flex">
          <a className="text-base mr-1.5 hover:cursor-pointer hover:underline">Facebook</a>
          <a className="text-base mr-1.5 hover:cursor-pointer hover:underline">Twitter</a>
          <a className="text-base mr-1.5 hover:cursor-pointer hover:underline">Instagram</a>
        </div>
      </div>
    </div>
  )
}

export default Footer