import React from 'react'
import TodaySummary from '../TodaySummary/TodaySummary'
export default function HighlightAppointment({ data }) {
    return (
        <>
            <TodaySummary count={data.length} />
            <div className='flex justify-center '>
                <div className="relative h-[600px] w-[90%] rounded-[15px] bg-white shadow-[1px_4px_4px_1px_rgba(85,85,85,0.25)] p-4 overflow-y-auto">
                    {data.length ? data.map((item) => (
                        <div
                            key={item.id}
                            className='flex flex-row items-center justify-start gap-3 border-b border-b-gray-300 pb-3 my-2'
                        >
                            <img src={item.image} alt="Avatar" className='h-[60px] w-[60px] rounded-full' />
                            <div className='text-right px-2'>
                                <p className='font-semibold text-lg'>{item.name}</p>
                                <p className='font-semibold text-lg'>{item.reminderTime}</p>
                            </div>
                        </div>
                    )) : (
                        <div className="flex justify-center items-center h-full">
                            <h2 className="text-2xl font-semibold text-gray-600">
                                لا يوجد مواعيد اليوم
                            </h2>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
