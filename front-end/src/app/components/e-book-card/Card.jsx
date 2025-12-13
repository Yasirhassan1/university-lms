export default function Card({title, author, tags}){
    return(
        <div className="card flex flex-col gap-3 p-5 bg-white shadow w-fit rounded-lg">
            <p className="font-semibold">{title}</p>
            <span>{author}</span>
            <div className="cont flex flex-wrap gap-3">
                {
                    tags.map((cur)=>{
                        return <span key={cur.id} className={`px-4 text-sm py-2 rounded-full ${cur.tagColor}`}>{cur.title}</span>
                    })
                }
            
            </div>
            <div className="buttons flex gap-3 mt-4">
            <button className="px-4 py-3 rounded-lg border border-gray-200">Preview</button>
            <button className="px-4 py-3 rounded-lg bg-(--primary-color) text-white">Download</button>
            </div>
        </div>
    )
}