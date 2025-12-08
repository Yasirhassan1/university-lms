import Card from "@/app/components/property-card/Card"
import Table from "@/app/components/table/Table"
import { feeRecords } from "./table-data"
import { miscellaneousFeeRecords } from "./table-data"

export default function Page(){
    const data = [
        {
            title: "Name",
            value: "Yasir Hassan"
        },

          {
            title: "Program",
            value: "BSCS Fall 2023"
        },
        
    ]
    return(
<section className="flex flex-col gap-8">
    <h3>Fee Challan</h3>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5">
        {data.map((item, i) => (
          <Card key={i} title={item.title} value={item.value} />
        ))}
      </div>
      <Table tableHead={feeRecords.head} tableRowData={feeRecords.tableRowData}/>
      <div className="flex flex-col gap-2">
      <p className="font-bold mt-4">General Fee</p>
      <Table tableHead={miscellaneousFeeRecords.head} tableRowData={miscellaneousFeeRecords.tableRowData}/>
      </div>
      </section>
    )
}