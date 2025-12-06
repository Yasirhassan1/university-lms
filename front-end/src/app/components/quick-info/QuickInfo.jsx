import { data } from "./data";
import Card from "./Card";
export default function QuickInfo(){
    return(
        <div className="flex gap-4 flex-wrap">
           {data.map((item, index) => (
            <Card key={index} title={item.title} count={item.count}/>
           ))}
        </div>
    )
}