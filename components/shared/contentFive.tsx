import React from 'react'
import { CardWithContent } from '../Custom/cards'

function ContentFive() {
  return (
    <div className='flex flex-col bg-pink-50 md:flex-row justify-between gap-10'>
        <CardWithContent/>
        <CardWithContent/>
        <CardWithContent/>
        <CardWithContent/>
        </div>
  )
}

export default ContentFive