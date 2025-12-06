import { IoSearchOutline, IoMenu } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { CiLogout } from "react-icons/ci";

export default function Header({ toggleSidebar }) {
    return (
        <header className="py-5 col-start-1 lg:col-start-2 row-start-1 h-[80px] bg-white border-b border-gray-200 flex items-center px-4 gap-3 justify-between lg:justify-start">
            {/* Mobile Menu Button */}
            <button onClick={toggleSidebar} className="lg:hidden p-2 text-gray-500">
                <IoMenu size={24} />
            </button>

            <form action="" className="flex-1 max-w-[700px] hidden sm:block">
                <div className="relative">
                    <IoSearchOutline className="absolute top-1/2 -translate-y-1/2 left-3" />

                    <input type="text" placeholder="Search courses, assignments or announcement" className="bg-[#FFFDFD] w-full pl-9 border rounded-md py-3 px-3 outline-0 focus:ring-1 focus:ring-green-200 border-[#C3C3C3]" />
                </div>
            </form>

            {/* Mobile Search Icon (optional, if we want to hide full bar on very small screens) */}
            <button className="sm:hidden p-2 text-gray-500">
                <IoSearchOutline size={24} />
            </button>

            <div className="actions flex gap-3 ml-auto lg:ml-0">

                <div className="rounded-lg border  border-gray-500 p-3">
                    <GoBell className="h-5 w-5 text-gray-500" />
                </div>
                <div className=" rounded-lg border  border-gray-500 p-3">
                    <CiLogout className="h-5 w-5 rotate-180 text-gray-500" />
                </div>
            </div>



        </header>
    )
}