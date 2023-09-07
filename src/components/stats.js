import React from 'react'

const Stats = () => {
  return (
    <div className="flex flex-col gap-10 mt-10 mb-36">
      <div className="flex justify-end mb-36">
        <div className="flex flex-col w-2/3">
          <h3 className="text-3xl text-left mb-8">We are driven to change lives for the better and we do that by creating places and spaces that positively impact the people who use them and the environment that surrounds them.</h3>
          <div><a className="text-lg opacity-90 hover:underline hover:cursor-pointer" href="/projects">View more Projects &rarr;</a></div>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col justify-start">
          <div className="flex flex-col h-5/6">
            <h2 className="text-5xl font-medium text-left mb-10">By the<br className="leading-10" /> Numbers</h2>
            <p className="text-xl">We prioritize sustainable energy and ecological conservation in every project we take on.</p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex  flex-col justify-end w-1/3">
            <div className="flex flex-col h-1/2">
              <h1 className="text-6xl font-normal text-left">98&#37;</h1>
              <p className="text-lg mt-4">Lower energy consumption and costs than comparable buildings around the world.</p>
            </div>
          </div>
          <div className="flex  flex-col justify-end w-1/3">
            <div className="flex flex-col h-1/2">
              <h1 className="text-6xl font-normal text-left">85&#37;</h1>
              <p className="text-lg mt-4">Reduction in the use of non-renewable resources.</p>
            </div>
          </div>
          <div className="flex  flex-col justify-end w-1/3">
            <div className="flex flex-col h-1/2">
              <h1 className="text-6xl font-normal text-left">77&#37;</h1>
              <p className="text-lg mt-4">Use of recycled and recyclable materials.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats