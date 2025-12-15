export default function Field({lable, value, onChange}){
    return(
        <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-gray-500">{lable}</label>
             <input type="text" onChange={onChange}  className="bg-[#FFFDFD] w-full border rounded-md py-3 px-3 outline-0 focus:ring-1 focus:ring-green-200 border-[#C3C3C3]" value={value}/>
        </div>
    )
}