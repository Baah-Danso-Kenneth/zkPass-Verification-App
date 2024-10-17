"use client"

import BitcoinChart from "./bitcoinChart"
import Governance from "./governance"
import Notification from "./notification"
import ProductImage from "./product_image"
import Proposals from "./proposal"
import Transactions from "./transactions"





export const description = "A collection of health charts."

export function DashboardCharts() {
  return (
    <div className="chart-wrapper mx-auto flex max-w-6xl flex-col flex-wrap items-start justify-center gap-6 p-6 sm:flex-row sm:p-8">

      <div className="grid w-full gap-6 sm:grid-cols-2 lg:max-w-[22rem] lg:grid-cols-1 xl:max-w-[25rem]">
           <BitcoinChart/>
           <Transactions/>
      </div>


      
      <div className="grid w-full flex-1 gap-6 lg:max-w-[20rem]">
      <Proposals/>
       <Notification/>
      </div>


      <div className="grid w-full flex-1 gap-6">
          <Governance/>
          <ProductImage/>
      </div>


    </div>
  )
}
