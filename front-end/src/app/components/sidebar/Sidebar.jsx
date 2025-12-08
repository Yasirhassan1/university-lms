import Image from "next/image"
import img from "@/app/assets/logo.svg"
import Link from "next/link"
import { IoClose } from "react-icons/io5";
import { linksData } from "./linksData";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed  inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`
                fixed lg:static top-0 left-0 z-50
                w-[320px] bg-white h-full  border-r border-r-gray-200
                flex flex-col gap-2 p-5
                transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            `}>
        <div className="top flex gap-3 items-center justify-between">
          <div className="flex gap-3 items-center">
            <div className="logoCover bg-green-300/35 rounded-lg flex items-center justify-center p-3">
              <Image
                src={img}
                alt="logo"
                width={40}
                height={40}
              />

            </div>

            <div className="flex flex-col">
              <p className="text-sm!">UNIVERSITY OF BALTISTAN</p>
              <strong>Learning Portal</strong>
            </div>
          </div>
          {/* Close button for mobile */}
          <button onClick={onClose} className="lg:hidden p-2 text-gray-500">
            <IoClose size={24} />
          </button>
        </div>

        <div className="links flex flex-col gap-3.5 mt-10 text-gray-500 border-b border-b-gray-300 pb-6">

          {linksData.map((cur, ind)=>{
            return  <Link className="hover:underline" key={ind} href={cur.href} onClick={onClose}>{cur.name}</Link>
          })}
         

        </div>

        <div className="account flex gap-3 items-center mt-auto pt-6">
          <div className="round w-11 h-11 rounded-full bg-green-400/35"></div>
          <div>
            <p className="font-semibold">Yasir Hassan</p>
            <span>Student</span>
          </div>

        </div>

      </aside>
    </>
  )
}