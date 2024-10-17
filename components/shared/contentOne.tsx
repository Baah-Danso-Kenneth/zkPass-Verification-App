import React from 'react'
import { Button } from '../ui/button'

function ContentOne() {
  return (
    <div className='bg-red-50 flex justify-between px-5 py-5'>
         <div>
          <p>Your Portfolio value</p>
           <h3>98,548.14</h3>
         </div>
        <Button variant='outline'>+30333</Button>
      </div>
  )
}

export default ContentOne