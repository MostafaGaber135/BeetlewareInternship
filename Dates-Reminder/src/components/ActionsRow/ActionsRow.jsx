import React from 'react'

export default function ActionsRow({ deleteData, viewData }) {
    return (
        <>
            <div className='flex justify-between mx-18 mt-4 my-2'>
                <div
                    onClick={viewData}
                    className="w-[150px] px-4 py-2 rounded-[8px] text-white 
         bg-[#224f61] 
         hover:bg-[#1b3f4d] active:bg-[#162f39]
         transition-colors duration-200 cursor-pointer select-none text-center"
                >
                    عرض المواعيد
                </div>
                <div
                    onClick={deleteData}
                    className="w-[150px] px-4 py-2 rounded-[8px] text-white 
         bg-[#224f61] 
         hover:bg-[#1b3f4d] active:bg-[#162f39]
         transition-colors duration-200 cursor-pointer select-none text-center mx-2"
                >
                    مسح الكل
                </div>
            </div>
        </>
    )
}
