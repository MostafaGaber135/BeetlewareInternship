import React from 'react'

export default function TodaySummary({ count }) {
  return (
    <>
      <div className='flex justify-center'>
        <div className='mb-1 text-right w-[90%] font-semibold text-xl'>
          لديك {count} مواعيد اليوم
        </div>
      </div>
    </>
  )
}
