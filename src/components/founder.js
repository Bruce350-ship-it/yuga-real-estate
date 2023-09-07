import React from 'react'
import founder from '../Stock/pexels-alena-darmel-8133887.jpg'

const Founder = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-1/2"><img src={founder} alt="founder" /></div>
      <div className="ml-8 w-1/2">
        <h4 className="text-2xl opacity-75">“We create places and spaces that positively impact the people who use them and the environment that surrounds them.”</h4>
        <p className="text-lg opacity-75 mt-10">&minus; Founder, Architect</p>
      </div>
    </div>
  )
}

export default Founder