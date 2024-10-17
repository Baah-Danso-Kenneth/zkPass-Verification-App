import React from 'react'
import { BiTrendingDown } from "react-icons/bi";
import Precision from '../Custom/precision';


function ContentTwo() {
  return (
    <div className='bg-green-100 flex items-center justify-between p-5'>
            <Precision title='Pricing' price={80002} icon={<BiTrendingDown/>} />
            <Precision title='Pricing' price={80002} icon={<BiTrendingDown/>} />
            <Precision title='Pricing' price={80002} icon={<BiTrendingDown/>} />
            <Precision title='Pricing' price={80002} icon={<BiTrendingDown/>} />
      </div>
  )
}

export default ContentTwo