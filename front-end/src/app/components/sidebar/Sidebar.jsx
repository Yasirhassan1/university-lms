import Image from "next/image"
import img from "@/app/assets/logo.svg"
import Link from "next/link"
import { IoClose } from "react-icons/io5";
import { linksData } from "./linksData";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

export default function Sidebar({ isOpen, onClose }) {
  const [expandedMenus, setExpandedMenus] = useState([])

  const toggleMenu = (name) => {
    setExpandedMenus(prev =>
      prev.includes(name) ? prev.filter(item => item !== name) : [...prev, name]
    )
  }

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

        <div className="links flex flex-col gap-3.5 mt-10 text-gray-500 border-b border-b-gray-300 pb-6 overflow-y-auto">

          {linksData.map((cur, ind) => {
            if (cur.expandable) {
              const isExpanded = expandedMenus.includes(cur.name);
              return (
                <div key={ind} className="flex flex-col">
                  <button
                    className="flex justify-between items-center w-full group hover:text-green-700 transition-colors"
                    onClick={() => toggleMenu(cur.name)}
                  >
                    <span>{cur.name}</span>
                    <MdKeyboardArrowRight
                      className={`transition-transform duration-200 ${isExpanded ? "rotate-90" : "rotate-0"}`}
                      size={24}
                    />
                  </button>

                  {/* Sub-links */}
                  {isExpanded && (
                    <div className="flex flex-col ml-2 mt-2 border-l-2 border-l-gray-200 pl-4 gap-2 animate-in slide-in-from-top-2 fade-in duration-200">
                      {cur.subLinks?.map((sub, subInd) => (
                        <Link
                          key={subInd}
                          href={sub.href}
                          onClick={onClose}
                          className="text-sm text-gray-400 hover:text-green-600 hover:underline py-1"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            }
            return <Link className="hover:underline hover:text-green-700 transition-colors" key={ind} href={cur.href} onClick={onClose}>{cur.name}</Link>
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