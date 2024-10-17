import { precisionTypes } from '@/types/regular.types'
import React from 'react'

function Radial({icon, title, price}:precisionTypes) {
  return (
    <div className='flex flex-col'>
        <div className='flex gap-2'>
            {icon}
            <h1>{title}</h1>
        </div>
        <h3>{price}</h3>
    </div>
  )
}

export default Radial