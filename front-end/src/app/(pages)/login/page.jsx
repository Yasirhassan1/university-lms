import Link from "next/link"
import Image from "next/image"
import logoSource from '@/app/assets/logo.svg'
import { FaRegUser } from "react-icons/fa6";
import { GoLock } from "react-icons/go";
export default function Page(){
 
    return(
        <div className="bg-[#F3F7FD] h-screen flex flex-col items-center">
            <header className="flex w-full gap-4 justify-between flex-wrap px-4 text-gray-600 items-center  bg-white h-14 border-b border-gray-300/70">
              <div className="leftSide flex gap-3 items-center">
               <Image 
  src={logoSource}
  alt="My logo" 
  width={30} 
  height={30}
/>
<div className="flex flex-col">
    <strong>UNIVERSITY OF BALTISTAN</strong>
    <span className="text-xs">LEARNING MANAGEMENT SYSTEM</span>
</div>

              </div>
              <div className="rightSide flex gap-3">
                <Link href={"/"}>CODE CONTRIBUTORS</Link>
                <Link href={"/"}>COMMON</Link>
              </div>
            </header>
       <form action="" className="p-6 mt-5  bg-white w-full h-fit max-w-md border shadow-lg border-gray-200 rounded-xl  flex flex-col gap-4">
            <div className="flex flex-col  items-center">
            <h3>Welcome Back</h3>
            <span className="text-gray-500">Sign in to your LMS</span>
            </div>
            <div className="flex flex-col gap-1 mt-5">
            <label htmlFor="" className="font-semibold">Username <span className="text-red-500">*</span></label>
            <div className="relative">
            <input type="text" placeholder="F23BSCS044"  className="bg-[#FFFDFD] w-full border rounded-md py-3 px-3 outline-0 focus:ring-1 focus:ring-green-200 border-[#C3C3C3]"/>
            <FaRegUser className="absolute text-gray-500 right-3 top-1/2 -translate-y-1/2"/>
            </div>
            </div>

            <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-semibold">Password <span className="text-red-500">*</span></label>
            <div className="relative">
            <input type="text"  className="bg-[#FFFDFD] w-full border rounded-md py-3 px-3 outline-0 focus:ring-1 focus:ring-green-200 border-[#C3C3C3]"/>
            <GoLock className="absolute text-gray-500 right-3 top-1/2 -translate-y-1/2"/>
            </div>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
                <span>Remember me</span>
            </div>
            <Link href={"/dashboard"} className="bg-(--primary-color) mt-3  text-white py-2 rounded-md text-center hover:bg-[#015228] duration-200 transition-all cursor-pointer font-semibold">Sign In</Link>
            <Link className="mt-6 hover:underline w-fit text-gray-500" href={"/"}>Forget Password?</Link>
        </form>

        </div>
        
    )
}