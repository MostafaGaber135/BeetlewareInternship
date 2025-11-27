import React, { useState } from 'react'

export default function Navbar({ filterBySearch }) {
    const [isOpen, setIsOpen] = useState(false)
    const [searchValue, setSearchValue] = useState('');

    const onSearch = () => {
        filterBySearch(searchValue);
        setSearchValue('');
    }

    return (
        <>
            <nav className="bg-[#202427] w-full py-3 px-4 flex flex-col lg:px-0 lg:grid lg:grid-cols-2 lg:gap-64">
                <div className="flex items-center justify-between lg:block lg:mx-32">
                    <a
                        href="/"
                        className="text-[#a05a48] font-semibold text-xl cursor-pointer"
                    >
                        مطعم جديد
                    </a>
                    <button
                        className="lg:hidden text-white"
                        onClick={() => setIsOpen(prev => !prev)}
                        aria-label="Toggle navigation"
                    >
                        <span className="block w-6 h-0.5 bg-white mb-1" />
                        <span className="block w-6 h-0.5 bg-white mb-1" />
                        <span className="block w-6 h-0.5 bg-white" />
                    </button>
                </div>
                <div
                    className={`
                        mt-3 lg:mt-0
                        ${isOpen ? 'flex' : 'hidden'}
                        lg:flex items-center
                    `}
                >
                    <input
                        type="text"
                        placeholder="ابحث..."
                        className="bg-white rounded-md p-1 w-full lg:w-auto"
                        onChange={(e) => setSearchValue(e.target.value)}
                        value={searchValue}
                    />
                    <button onClick={() => onSearch()} className="text-[#a26e6f] bg-white cursor-pointer mx-2 rounded-md p-1 px-3">
                        ابحث
                    </button>
                </div>

            </nav>
        </>
    )
}
