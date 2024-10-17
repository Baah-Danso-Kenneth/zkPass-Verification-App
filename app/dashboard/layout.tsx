import ContentFive from '@/components/shared/contentFive'
import ContentFour from '@/components/shared/contentFour'
import ContentOne from '@/components/shared/contentOne'
import ContentSeven from '@/components/shared/contentSevent'
import ContentSix from '@/components/shared/contentSix'
import ContentThree from '@/components/shared/contentThree'
import ContentTwo from '@/components/shared/contentTwo'
import React from 'react'

function DashboardLayout({children}:{children:React.ReactNode}) {
  return (
        <div className=' h-screen w-full justify-between p-6'>
            <div className='w-full'>
                <ContentSix/>
            </div>

                <div className='flex gap-5'>
                    <div className='w-1/5'>
                        <ContentOne/>
                    </div>
                    <div className='flex-grow'>
                    <ContentTwo/>
                    </div>
                </div>


                <div className='flex gap-5 mt-5'>
                    <div className='w-1/5'> <ContentThree/></div>
                    <main className='flex-grow'>{children}</main>
                </div>

                <div className='flex gap-5'>
                    <div className='w-1/5'>
                        <ContentFour/>
                    </div>
                    <div className='flex-grow'>
                    <ContentFive/>
                    </div>
                </div>
        


                    <div className='w-full'>
                    <ContentSeven/>
                    </div>

                </div>

    )
}

export default DashboardLayout