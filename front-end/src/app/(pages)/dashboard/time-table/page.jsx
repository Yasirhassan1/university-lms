import { timetable } from "@/app/(pages)/dashboard/time-table/time-table-data"
import Table from "@/app/components/table/Table"
export default function Page() {
    return (
        <section className="flex flex-col gap-4">
            <h3>Time Table</h3>
            <Table tableHead={timetable.head} tableRowData={timetable.tableRowData} />
        </section>
    )
}