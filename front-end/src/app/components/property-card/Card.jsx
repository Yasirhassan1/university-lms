export default function Card({title, value}){
    return(
        <div className="card w-full shadow-sm p-3 flex gap-4 justify-between rounded-lg border border-gray-200">
          <p>{title}</p>
          <p className="font-semibold">{value}</p>
        </div>
    )
}