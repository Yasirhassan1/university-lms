import Table from "@/app/components/table/Table";
import {table} from "@/app/pages/dashboard/attendence/table-data"
export default function Page(){
    return(
      <div className="flex flex-col gap-4">
        <h3>Attendance of Semester “Fall 2025”</h3>
        <Table tableHead={table.head} tableRowData={table.tableRowData}/>
      </div>
    )
}