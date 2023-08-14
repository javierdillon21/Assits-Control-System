

export default function CursoCard(props: {
  curso: any
}) {


  return (
    <div className="rounded-lg flex flex-col border w-50 h-40 hover:bg-gray-100">
      <div className="h-3/5 rounded-t-lg bg-green-600"></div>
      <div className="flex flex-1 flex-col p-1">
        <div className="text-sm font-bold text-slate-700">{props.curso.nombreCurso}</div>
        <div className="text-sm font-semibold text-slate-400">Paralelo {props.curso.paralelo}</div>
        <div className="text-sm font-semibold text-slate-400">Creación: {props.curso.creacion}</div>
      </div>
    </div>
  );
}