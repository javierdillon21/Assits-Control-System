

export default function Table(props: {
  cols: any[],
  data: any[],
  onItemPressed?: any[]
}) {

  return (
    <table className="text-left text-sm font-light">
      <thead className="border-b font-medium border-slate-400">
        <tr>
          {
            props.cols.map((colName)=> (
              <th scope="col" className={`px-6 py-3`}>{colName}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          props.data.map((obj)=> (
            <tr className="border-b border-slate-200">
              {
                Object.keys(obj).map((key) => (
                  <td className="whitespace-nowrap px-6 py-4">{obj[key]}</td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}