import logo from '../../assets/logo.png';
import { Search } from 'lucide-react';
export default function Navbar({ search }) {
    const onSearch = (word) => {
        search(word)
    }
    return (
        <nav className="
            bg-[#b45b35] h-[70px] w-full flex items-center justify-between
            px-4 sm:px-10 md:px-20 lg:px-32
        ">
            <a href="/">
                <img
                    src={logo}
                    alt="logo"
                    className="w-16 h-16 object-contain ml-2 sm:ml-4"
                />
            </a>

            <div className="flex-1 flex justify-center">
                <div className="relative w-full max-w-4xl px-2 sm:px-0">
                    <input
                        type="text"
                        onChange={(e) => onSearch(e.target.value)}
                        placeholder="بحث"
                        className="
                            w-full h-14 rounded-full bg-white pr-12 pl-12
                            border-4 border-red-600 text-right
                            placeholder-gray-400 focus:outline-none
                        "
                    />

                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 text-xl">
                        <Search />
                    </span>
                </div>
            </div>
        </nav>
    );
}
