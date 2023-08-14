import CursoCard from '@/app/components/cursocard'
import '@/app/globals.css'

export default function Cursos() {

  //TODO: fetch cursos from database

  const cursos = [
    {id: "129d1", color:"#10b981", paralelo:"102", nombreCurso: "Telemetria", creacion: "08-08-2023"},
    {id: "129d2", color:"#03a9fc", paralelo:"101", nombreCurso: "Sistemas Embebidos", creacion: "08-08-2023"},
  ];

  return (
    <div className="overflow-hidden flex flex-col flex-1 w-full p-2.5 gap-y-2.5">
      <div className="flex flex-row h-10 items-center">
        <div className="flex flex-grow font-bold text-slate-700 text-xl">Cursos</div>
        <section id="add-curso" className="flex flex-grow justify-end">
          <button type="button" className="flex-flex-grow text-[0.9rem] bg-slate-700 rounded-lg hover:bg-slate-900 font-bold text-white p-2">
          + Añadir curso
          </button>
        </section>
      </div>
      <hr/>
      <section id="cursos" className="-mb-2.5 grid h-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-3 overflow-auto">
          {
            cursos.map((curso) => (
              <CursoCard key={curso.id} curso={curso} color={curso.color}/>
            ))
          }
          <input>
          </input>
      </section>
    </div>
  )
}