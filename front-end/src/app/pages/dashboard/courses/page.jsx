import {table} from "@/app/pages/dashboard/courses/table-data"
import Table from "@/app/components/table/Table"
export default function Page(){
    return(
        <Table tableHead={table.head} tableRowData={table.tableRowData}/>
    )
}