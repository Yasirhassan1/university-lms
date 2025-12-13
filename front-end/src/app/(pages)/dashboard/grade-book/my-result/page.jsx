import Card from "@/app/components/property-card/Card";
import {result} from "@/app/(pages)/dashboard/grade-book/my-result/table-data"
import Table from "@/app/components/table/Table";
import {v4 as uuidv4} from 'uuid';
export default function Page() {
  const data = [
    {
       studentDetails: [
    {
      id:uuidv4(),
      title: "Name", 
      value: "Yasir Hassan" 
      },
    {
      id:uuidv4(),
       title: "Father Name", 
       value: "Ghulam Hassan" 
      },
    {
      id:uuidv4(),
       title: "Registration No", 
       value: "F23BSCS044" 
      },
    {
      id:uuidv4(),
       title: "Department", 
       value: "Computer Science" 
      },
    {
      id:uuidv4(),
       title: "Degree", 
       value: "BSCS" 
      },
    {
      id:uuidv4(),
       title: "Session", 
       value: "2023-2027" 
      },
        ]
    },
    {
        resultDetails: [

        {
          id:uuidv4(),title: "Total Credit Hour", value: 18},
        {id:uuidv4(),title: "Total Marks", value: 600},
        {id:uuidv4(),title: "Obtain Marks", value: 405},
        {id:uuidv4(),title: "Percentage", value: 78},
        ],
    }
  ];

  

  return (
    <div className="containe flex flex-col gap-4">
    <section className="w-full max-w-7xl">
      <h2 className="text-2xl font-bold mb-4 ">Result Details</h2>

      {/* GRID: 2 per row, total 3 rows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data[0].studentDetails.map((item, i) => (
          <Card key={item.id} title={item.title} value={item.value} />
        ))}
      </div>

    </section>

    <section className="flex flex-col gap-6 mt-8">
        {

        result.results.map((cur, ind)=>{
            return (

                <div key={cur.id} className="flex flex-col gap-2">
                    <p>Semester {ind+1}</p>
                      <Table key={cur.id} tableHead={result.head} tableRowData={cur.tableRowData}/>
                </div>
              
            )
            })
        
        
}
    </section>

     <section className="w-full max-w-7xl mt-10">


      {/* GRID: 2 per row, total 3 rows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data[1].resultDetails.map((item, i) => (
          <Card key={item.id} title={item.title} value={item.value} />
        ))}
      </div>

    </section>

    </div>
  );
}
