"use client"
import Card from "@/app/components/e-book-card/Card";
import { bookData } from "./data";
import { useState } from "react";
export default function Page(){

    const [search, setSearch] = useState("")
    return(
        <div className="flex flex-col gap-5">
        <section>
            <h3>E-Books</h3>
            
                <form action="" className="p-8 shadow bg-white rounded-lg mt-4">
                    <div className="cont flex gap-6 justify-between flex-wrap">
                        <div className="flex flex-col gap-2 w-full">
                       <label htmlFor="">Search tags or keywords</label>
                       <input
  type="text"
  onChange={(e) => setSearch(e.target.value)}
  placeholder="e.g Database JavaScript Network"
  className="p-4 rounded-lg border border-gray-200 w-full"
/>
                        </div>
                    
                        <div className="flex flex-col gap-2 w-full">
                       <label htmlFor="">Publisher</label>
                        <input type="text" placeholder="Unknown" className="p-4 rounded-lg border border-gray-200 w-full" />
                        </div>
                   
                    </div>

                </form>
         
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
           {
            search.length == 0?
            (
            bookData.map((cur, ind)=>{
                return <Card key={ind} title={cur.title} author={cur.author} tags={cur.tags}/>
            })
        ):
        (
            bookData.filter((cur)=>{
                return cur.title.toLowerCase().includes(search.toLowerCase())
            }).map((cur, ind)=>{
                return <Card key={ind} title={cur.title} author={cur.author} tags={cur.tags}/>
            })
        )
           }
        </section>
        </div>
    )
}