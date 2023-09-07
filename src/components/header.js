import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between px-14 py-8">
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold tracking-wider mr-2 hover:cursor-pointer hover:underline"><a href="/home">YUGA</a></h1>
        <div className="flex items-center">
          <a className="text-base font-normal mx-2.5 hover:cursor-pointer hover:underline" href="/studio">Studio</a>        
          <a className="text-base font-normal mx-2.5 hover:cursor-pointer hover:underline" href="/projects">Projects</a>
          <a className="text-base font-normal mx-2.5 hover:cursor-pointer hover:underline" href="/news">News</a>
        </div>
      </div>
      <a href="/contact"><button className="bg-blue-950 text-white text-sm tracking-wide px-8 py-3.5 hover:bg-black hover:cursor-pointer">Start a Project</button></a>
      
    </div>
  )
}

export default Header