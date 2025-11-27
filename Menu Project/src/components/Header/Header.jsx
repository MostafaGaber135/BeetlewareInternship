import React from 'react'
import Line from '../Line/Line'
export default function Header() {
    return (
        <>
            <div className='flex justify-center mt-4'>
                <div className='text-[#224f61] text-3xl font-bold'>قائمه الطعام</div>
            </div>

            <div className='flex justify-center'>
                <Line />
            </div>
        </>
    )
}
