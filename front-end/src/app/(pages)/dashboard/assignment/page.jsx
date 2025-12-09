import {table} from "@/app/(pages)/dashboard/assignment/table-data"
import Table from "@/app/components/table/Table"
export default function Page(){
    return(
         <section>
                    <h3>Assignment</h3>
                    <p className="font-semibold mt-4">Select Course</p>
                    <select className="mt-3 bg-gray-200 px-3 py-2 rounded-lg" name="" id="">
                        <option value="">Advance Database</option>
                        <option value="">Operating System</option>
                        <option value="">Software Engineering</option>
                        <option value="">Artificial Intelligence</option>
                    </select>
                    <div className="flex flex-col gap-4 mt-7">
                        <p className="font-bold ">Show Assignment form</p>
                    <Table tableHead={table.head} tableRowData={table.tableRowData}/>
                    <p className="font-semibold mt-3">Submit Assignment Form</p>
                    <form action="" className="flex flex-col gap-3">
                        <input type="file" className="p-3 bg-gray-200 w-fit rounded-lg cursor-pointer" />
                        <button className="bg-(--primary-color) w-fit text-white  px-4 py-2 rounded-lg">Upload</button>
                    </form>
                </div>
                </section>
    )
}