   import Link from "next/link";
   export const evaluations = [
        {
            code: "#013",
            course: "Advance Database Managements System",
            status: "Pending",
            id: 1,
        },
        {
            code: "#014",
            course: "Software Engineering-I",
            status: "Completed",
            id: 2
        },
        {
            code: "#015",
            course: "Operating System",
            status: "Pending",
            id: 3
        },
        {
            code: "#016",
            course: "English-III (Technical and Report Writing)",
            status: "Pending",
            id: 4
        },

         {
            code: "#016",
            course: "HCI and Computer Graphics",
            status: "Pending",
            id: 4
        },
    ];

     const tableHead2 = ["Code", "Course Name", "Status", "Action"];
    
    
        // Transform mock data into the format expected by Table component (array of arrays)
        const tableRowData2 = evaluations.map(evaluation => [
            evaluation.code,
            evaluation.course,
            <span key={evaluation.id} className={`px-2 py-1 rounded-full text-xs font-semibold ${evaluation.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                {evaluation.status}
            </span>,
            evaluation.status === 'Pending' ? (
                <Link key={evaluation.id} href={`/dashboard/qec/evaluate/${evaluation.id}`} className="inline-block bg-(--primary-color) text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors">
                    Evaluate
                </Link>
            ) : (
                <span key={evaluation.id} className="text-gray-400 text-sm italic">
                    Submitted
                </span>
            )
        ]);

        export { tableHead2, tableRowData2 };