import '@/app/globals.css'

export default function Resumen() {
  return (
    <div className="flex flex-col flex-1 h-full w-full p-2.5 gap-y-2.5">
      <div className="flex flex-row h-10 items-center">
        <div className="flex flex-grow font-bold text-slate-700 text-xl">Estudiantes</div>
        <section id="busqueda-estudiantes" className="flex flex-grow justify-end gap-x-3">
          <input className="flex flex-grow pl-1 text-slate-500 border focus:border-slate-700 focus:outline-none border-slate-400 rounded-lg text-[0.9rem]"
              placeholder="Buscar..."/>
          <button type="button" className="flex-flex-grow text-[0.9rem] bg-slate-700 rounded-lg hover:bg-slate-700 font-bold text-white p-2">
          + Añadir estudiante
          </button>
        </section>
      </div>
    <hr/>

    <section className="flex flex-col flex-1 w-full">
        
      </section>

    </div>
  )
}