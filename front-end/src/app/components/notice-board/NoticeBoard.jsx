export default function NoticeBoard(){
    return(
      <div className="card flex flex-col gap-2 w-full max-w-7xl shadow-lg rounded-lg">
        <strong className="bg-green-100 p-4 rounded-t-lg">Notice Board</strong>
        <div className="flex justify-between gap-3 p-4">
            <div className="left flex flex-col">
                <p>AI Ethics Webinar</p>
                <span className="text-xs">2025-12-07</span>
            </div>
            <p className="bg-green-100 px-4 py-2 rounded-full">Conference Hall</p>
        </div>

        <div className="flex justify-between gap-3 p-4">
            <div className="left flex flex-col">
                <p>Future Technologies</p>
                <span className="text-xs">2025-18-07</span>
            </div>
            <p className="bg-green-100 px-4 py-2 rounded-full">Lab 1</p>
        </div>
        
      </div>
    )
}