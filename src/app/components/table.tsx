
import trash_icon from '../../../assets/svg/trash.svg';
import edit_icon from '../../../assets/svg/edit.svg';
import eye_icon from '../../../assets/svg/eye.svg';
import { useState } from 'react';

export default function Table(props: {
  cols: any[],
  data: any[],
  shouldRemainHovered?: boolean,
  onItemUpdate?: (id: string) => void,
  onItemDelete?: (id: string) => void,
  onItemView?: (id: string) => void,
  onItemClick?: (id: string) => void,
}) {

  let hoverIndex = 0;
  const [hoverStyle, setHoverStyle] = useState(Array.from({length: props.data.length}, e => e = false));
  const onDelete = (id: string) => {if (props.onItemDelete) props.onItemDelete(id)};
  const onUpdate = (id: string) => {if (props.onItemUpdate) props.onItemUpdate(id)};
  const onView = (id: string) => {if (props.onItemView) props.onItemView(id)};
  const onClick = (id: string, element: any) => {
    if (props.onItemClick) {
      if (props.shouldRemainHovered) {
        hoverIndex = props.data.indexOf(element);
        const newHoverArray = Array.from({length: props.data.length}, e => e = false);
        newHoverArray[hoverIndex] = true;
        setHoverStyle(newHoverArray);
      }
      props.onItemClick(id);
    }
  };

  return (
    <table className="text-left text-sm font-light">
      <thead className="border-b font-medium border-slate-400">
        <tr key="rowinicial">
          {
            props.cols.map((colName)=> (
              <th key={colName} scope="col" className={`text-slate-700 px-6 py-3`}>{colName}</th>
            ))
          }
          {
            props.onItemDelete || props.onItemUpdate? 
            <th key="Acciones" scope="col" className={`text-slate-700 px-6 py-3`}>Acciones</th>
            : null
          }
        </tr>
      </thead>
      <tbody>
        {
          props.data.map((obj)=> (
            <tr key={obj.id} className={`border-b border-slate-200 ${(props.onItemClick? "hover:bg-slate-300 " : "")} ${(!hoverStyle[props.data.indexOf(obj)]? "" : "bg-slate-300")}`}
            onClick={() => {onClick(obj.id, obj)}} >
              {
                Object.keys(obj).map((key) => {
                  if (key != "id") {
                    return <td key={`${obj.id}-${obj[key]}`} className="whitespace-nowrap px-6 py-4">{obj[key]}</td>
                  }
                })
              }
              {
                props.onItemDelete || props.onItemUpdate? 
                <td className="flex justify-left px-6 py-4 gap-1">
                  {
                    props.onItemView? 
                    <button onClick={() => {onView(obj.id)}} className="flex justify-center items-center border rounded-lg p-1 hover:bg-slate-200">
                      <img src={eye_icon.src} className="h-8"/>
                    </button>
                    : null
                  }
                  {
                    props.onItemUpdate? 
                    <button onClick={() => {onUpdate(obj.id)}} className="flex justify-center items-center border rounded-lg p-1 hover:bg-slate-200">
                      <img src={edit_icon.src} className="h-8"/>
                    </button>
                    : null
                  }
                  {
                    props.onItemDelete? 
                    <button onClick={() => {onDelete(obj.id)}} className="flex justify-center items-center border rounded-lg p-1 hover:bg-slate-200">
                      <img src={trash_icon.src} className="h-8"/>
                    </button>
                    : null
                  }
                  
                </td> :
                null
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}