
export default function Table({tableHead, tableRowData}) {
    return (
        <div className="border border-gray-400 rounded-lg"> 
        <table className="w-full bg-white border-collapse shadow-sm  border border-gray-400 max-w-7xl rounded-lg overflow-hidden">
            <thead className="bg-green-100">
                <tr>
                    {
                        tableHead.map((item, index) => {
                            return (
                                <th key={index} className="p-1 border border-gray-400">{item}</th>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    tableRowData.map((item, index) => {
                        return (
                            <tr className="hover:bg-gray-200" key={index}>
                                {
                                    item.map((cell, index) => {
                                        return (
                                            <td key={index} className="border border-gray-400 p-1.5 text-gray-600">{cell}</td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
    )
}