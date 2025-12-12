import Table from "@/app/components/table/Table";
import Link from "next/link";
import { tableHead, tableRowData } from "./teacher-evaluation-data";
import { tableHead2, tableRowData2 } from "./course-evaluation-data";

export default function Page() {
   

    return (
        <div className="container mx-auto p-4 flex flex-col gap-6">
            <section className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-gray-800">Teacher And Course Evaluation</h3>
                <p className="text-gray-600">Please provide your feedback for the courses and teachers listed below. Your feedback helps us improve the quality of education.</p>
            </section>

            <section>
                <h4>Faculty Evaluation</h4>
                <Table tableHead={tableHead} tableRowData={tableRowData} />
            </section>

             <section>
                <h4>Course Evaluation</h4>
                <Table tableHead={tableHead2} tableRowData={tableRowData2} />
            </section>
        </div>
    )
}