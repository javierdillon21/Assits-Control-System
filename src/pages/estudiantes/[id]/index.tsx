import { useState } from "react";


export default function EstudianteViewPage() {

  const [estudiante, setEstudiante] = useState(null);

  return (
    <div className="overflow-hidden flex flex-col flex-1 h-full w-full p-2.5 gap-y-2.5">
      <div className="flex flex-grow font-bold text-slate-700 text-xl">Información del estudiante:</div>
    </div>
  )
}