import { precisionTypes } from '@/types/regular.types'
import React from 'react'

export function Precision({icon, price, title}:precisionTypes) {
  return (
    <div className='flex gap-3'>
        <div className='rounded-md bg-blue-500 w-5 h-5 flex items-center'>
            {icon}
        </div>

        <div>
            <h3>{price}</h3>
            <h2>{title}</h2>
        </div>
    </div>
  )
}

export default Precision