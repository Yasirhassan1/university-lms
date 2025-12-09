import Table from "@/app/components/table/Table";
import {table} from "@/app/(pages)/dashboard/lectures/table-data"
export default function Page(){
    return(
        <section>
            <h2>Syllabus</h2>
            <p className="font-semibold mt-4">Select Course</p>
            <select className="mt-3 bg-gray-200 px-3 py-2 rounded-lg" name="" id="">
                <option value="">Advance Database</option>
                <option value="">Operating System</option>
                <option value="">Software Engineering</option>
                <option value="">Artificial Intelligence</option>
            </select>
            <div className="flex flex-col gap-4 mt-7">
                <p className="font-bold ">List of Lectures</p>
            <Table tableHead={table.head} tableRowData={table.tableRowData}/>
        </div>
        </section>
      
    )
}