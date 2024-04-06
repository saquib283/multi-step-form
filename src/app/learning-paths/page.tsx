import Paths from '@/components/Paths'
import React from 'react'

const Page = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-8'>
        <div className='w-full '>
            <h1 className='text-center text-sm font-bold sm:text-xl '>Learning paths based on your answers</h1>
            <p className='text-xs text-center py-2 sm:text-sm'>Choose one to get started. You can switch anytime.</p>
        </div>
        <div className="cards mt-4 flex justify-center items-center flex-wrap gap-2">
            <Paths />
        </div>
    </div>
  )
}

export default Page