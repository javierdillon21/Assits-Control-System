import Table from '@/app/components/table'
import '@/app/globals.css'

export default function Estudiantes() {

  //TODO: fetchear datos del backend
  const estudiantes = [
    {id: "018h2d12", firstName: "Nicolas", lastName: "Segovia", espolUser: "nisenare", espolEmail:"nisenare@espol.edu.ec"},
    {id: "018h2d12", firstName: "Nicolas", lastName: "Segovia", espolUser: "nisenare", espolEmail:"nisenare@espol.edu.ec"},
    {id: "018h2d12", firstName: "Nicolas", lastName: "Segovia", espolUser: "nisenare", espolEmail:"nisenare@espol.edu.ec"},
    {id: "018h2d12", firstName: "Nicolas", lastName: "Segovia", espolUser: "nisenare", espolEmail:"nisenare@espol.edu.ec"},
    {id: "018h2d12", firstName: "Nicolas", lastName: "Segovia", espolUser: "nisenare", espolEmail:"nisenare@espol.edu.ec"},
    {id: "018h2d12", firstName: "Nicolas", lastName: "Segovia", espolUser: "nisenare", espolEmail:"nisenare@espol.edu.ec"},
    {id: "018h2d12", firstName: "Nicolas", lastName: "Segovia", espolUser: "nisenare", espolEmail:"nisenare@espol.edu.ec"},
    {id: "018h2d12", firstName: "Nicolas", lastName: "Segovia", espolUser: "nisenare", espolEmail:"nisenare@espol.edu.ec"},
    {id: "018h2d12", firstName: "Nicolas", lastName: "Segovia", espolUser: "nisenare", espolEmail:"nisenare@espol.edu.ec"},
  ];

  return (
    <div className="overflow-hidden flex flex-col flex-1 h-full w-full p-2.5 gap-y-2.5">
      <div className="flex flex-row h-10 items-center">
        <div className="flex flex-grow font-bold text-slate-700 text-xl">Estudiantes</div>
        <section id="busqueda-estudiantes" className="flex flex-grow justify-end gap-x-3">
          <input className="flex flex-grow pl-1 text-slate-500 border focus:border-slate-700 focus:outline-none border-slate-400 rounded-lg text-[0.9rem]"
              placeholder="Buscar..."/>
          <button type="button" className="flex-flex-grow text-[0.9rem] bg-slate-700 rounded-lg hover:bg-slate-900 font-bold text-white p-2">
          + Añadir estudiante
          </button>
        </section>
      </div>
      <hr/>
      <section id="tabla-estudiantes" className="flex flex-col flex-1 overflow-auto">
          <Table cols={["Nombre", "Fecha de registro", "Correo", "Espol User"]} data={
            estudiantes.map((est)=> {
              return {
                name: est.firstName + " " + est.lastName,
                regDate: "08-07-2023",
                email: est.espolEmail,
                user: est.espolUser
              };
            })
          }></Table>
      </section>
    </div>
  )
}