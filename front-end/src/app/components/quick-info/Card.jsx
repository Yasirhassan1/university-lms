export default function Card({title, count}){
    return(
        <div className="card flex flex-1 flex-col p-4 shadow-lg gap-2 rounded-xl border-l-2 border-green-700">
            <p>{title}</p>
            <span className="font-semibold">{count}</span>
        </div>
    )
}