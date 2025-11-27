import React from 'react'
import { Slide } from "react-awesome-reveal";

export default function Category({ filterByCategory, allCategory }) {
  const onFilter = (cat) => {
    filterByCategory(cat)
  }
  return (
    <div className='flex gap-2'>
      <Slide direction="left" cascade triggerOnce>
        {
          allCategory.length >= 1 ? (
            allCategory.map((cat) => (
              <div
                key={cat}
                onClick={() => onFilter(cat)}
                className='bg-white border-2 border-[#bb8f7d] rounded md:rounded-lg mt-4 cursor-pointer text-[#353535] font-semibold text-xl p-2 h-11 w-[60px] flex justify-center hover:bg-[#b35b3a]'
              >
                {cat}
              </div>
            ))
          ) : <h4>لا يوجد تصنيفات</h4>
        }
      </Slide>


    </div>
  )
}
