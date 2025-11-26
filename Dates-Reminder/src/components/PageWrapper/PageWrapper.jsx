import React from 'react'

export default function PageWrapper({ children }) {
  return (
    <div className='h-screen bg-[#f8f8f8]'>
      <div className='px-[15px] py-5'>
        {children}
      </div>
    </div>
  )
}
