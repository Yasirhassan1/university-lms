export default function NoticeBoard({data}){
    return(
      <div className="card flex flex-col gap-2 w-full max-w-7xl shadow-lg rounded-lg">
        <strong className="bg-green-100 p-4 rounded-t-lg">Notice Board</strong>
        <div className="flex justify-between flex-col gap-3 p-4">
            {
                data.map((item, index) => (
                    <div className="left flex gap-2 justify-between items-center">
                        <div className="flex flex-col gap-1">
                     
                        <p>{item.title}</p>
                        <span className="text-xs">{item.date}</span>
   </div>
                        <p className="bg-green-100 px-4 py-2 rounded-full">{item.location}</p>
                    </div>
                ))
            }
            
        </div>
        
      </div>
    )
}