   import Link from "next/link";
   export const evaluations = [
        {
            code: "#013",
            teacher: "Dr. Ali Khan",
            status: "Pending",
            id: 1,
        },
        {
            code: "#014",
            teacher: "Prof. Sara Ahmed",
            status: "Completed",
            id: 2
        },
        {
            code: "#015",
            teacher: "Mr. Bilal Raza",
            status: "Pending",
            id: 3
        },
        {
            code: "#016",
            teacher: "Ms. Amna Malik",
            status: "Pending",
            id: 4
        }
    ];

     const tableHead = ["Code", "Teacher Name", "Status", "Action"];
    
    
        // Transform mock data into the format expected by Table component (array of arrays)
        const tableRowData = evaluations.map(evaluation => [
            evaluation.code,
            evaluation.teacher,
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

        export { tableHead, tableRowData };