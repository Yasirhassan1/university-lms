import Link from "next/link"
import Image from "next/image"
import logoSource from '@/app/assets/logo.svg'
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
            <input type="text" placeholder="F23BSCS044"  className="bg-[#FFFDFD] border rounded-md py-3 px-3 outline-0 focus:ring-1 focus:ring-green-200 border-[#C3C3C3]"/>
            </div>

            <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-semibold">Password <span className="text-red-500">*</span></label>
            <input type="text"  className="bg-[#FFFDFD] border rounded-md py-3 px-3 outline-0 focus:ring-1 focus:ring-green-200 border-[#C3C3C3]"/>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
                <span>Remember me</span>
            </div>
            <button className="bg-[#007A56]  text-white py-2 rounded-md hover:bg-[#015239] duration-200 transition-all cursor-pointer font-semibold">Sign In</button>
            <Link className="mt-6 hover:underline w-fit" href={"/"}>Forget Password?</Link>
        </form>

        </div>
        
    )
}