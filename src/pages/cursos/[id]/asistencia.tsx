import Table from '@/app/components/table';
import '@/app/globals.css'

export default function Overview() {

  //TODO: fetch cursos from database

  const cursos = [
    {id: "12-9d1", paralelo:"102", nombreCurso: "Telemetria", creacion: "08-08-2023"},
    {id: "12-9d1", paralelo:"102", nombreCurso: "Telemetria", creacion: "08-08-2023"},
    {id: "12-9d1", paralelo:"102", nombreCurso: "Telemetria", creacion: "08-08-2023"},
    {id: "12-9d1", paralelo:"102", nombreCurso: "Telemetria", creacion: "08-08-2023"},
    {id: "12-9d1", paralelo:"102", nombreCurso: "Telemetria", creacion: "08-08-2023"},
    {id: "12-9d1", paralelo:"102", nombreCurso: "Telemetria", creacion: "08-08-2023"},
    {id: "12-9d1", paralelo:"102", nombreCurso: "Telemetria", creacion: "08-08-2023"},
    {id: "12-9d1", paralelo:"102", nombreCurso: "Telemetria", creacion: "08-08-2023"},
    {id: "12-9d1", paralelo:"102", nombreCurso: "Telemetria", creacion: "08-08-2023"},
    {id: "12-9d1", paralelo:"102", nombreCurso: "Telemetria", creacion: "08-08-2023"}
  ];

  return (
    <div className="overflow-hidden flex flex-col flex-1 w-full p-2.5 gap-y-2.5">
      <section>
        <div id="Descripcion del curso">
            <p>Curso: Telemetria</p>
            <p>Paralelo: 101</p>
            <p>Lab: Laboratorio de Sistemas Telematicos</p>
            <p>Estudiantes: N</p>
        </div>
        <button>Descargar asistencia</button>
        <button>Actualizar asistencia</button>
      </section>
      <section>
        <Table cols={["Fecha","Horarios","Asistentes"]} data={[{nomre:"sda"},{nomre:"sda"},{nomre:"sda"}]}>

        </Table>
      </section>
    </div>
  )
}