

export default function Table(props: {
  cols: any[],
  data: any[],
  onItemPressed?: any[]
}) {

  return (
    <table className="text-left text-sm font-light">
      <thead className="border-b font-medium border-slate-400">
        <tr key="rowinicial">
          {
            props.cols.map((colName)=> (
              <th key={colName} scope="col" className={`text-slate-700 px-6 py-3`}>{colName}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          props.data.map((obj)=> (
            <tr key={obj.id} className="border-b border-slate-200">
              {
                Object.keys(obj).map((key) => {
                  if (key != "id") {
                    return <td key={`${obj.id}-${obj[key]}`} className="whitespace-nowrap px-6 py-4">{obj[key]}</td>
                  }
                })
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}