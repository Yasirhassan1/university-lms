import {table} from "@/app/(pages)/dashboard/courses/course-registration/table-data"
import {table as table2} from "@/app/(pages)/dashboard/courses/course-registration/fail-subject-data"
import Table from "@/app/components/table/Table"
export default function CourseRegistration(){
    return(
        <div className="flex flex-col gap-4">
            <h3 className="">Registered Courses for Semester "Fall 2025"</h3>

        <Table tableHead={table.head} tableRowData={table.tableRowData}/>
        <p className="font-semibold">Total Credit Hours: 15</p>
        <div>
        <p className="font-bold text-red-400 mt-4">List of Fail Subjects</p>
        <span className="text-gray-500">Contact Course Coordinator to Register Fail Course(s)</span>
        </div>
        <Table tableHead={table2.head} tableRowData={table2.tableRowData}/>
        </div>
    )
}