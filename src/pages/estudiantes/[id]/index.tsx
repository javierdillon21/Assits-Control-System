import { GetAsistenciaQuery, GetCursoEstudianteQuery, GetEstudianteQuery, ListAsistenciasQuery, ListCursosQuery, ListEstudiantesQuery, OnCreateAsistenciaSubscription } from "@/API";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLQuery, GraphQLSubscription } from '@aws-amplify/api';
import * as queries from '../../../graphql/queries';
import * as subscriptions from '../../../graphql/subscriptions';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Table from "@/app/components/table";

export default function EstudianteViewPage() {

  let cursoSelectedId = "";
  const router = useRouter();
  const estudianteId = router.query.id;
  const [estudiante, setEstudiante] = useState<any>();
  const [asistencias, setAsistencias] = useState<any[]>([]);
  const [cursos, setCursos] = useState<any[]>([]);

  async function getEstudiante() {
    const estudiante = await API.graphql<GraphQLQuery<GetEstudianteQuery>>(
      {
        query: queries.getEstudiante,
        variables: { id: estudianteId }
      }
    );
    const res = estudiante?.data?.getEstudiante;
    return (res as any);
  }

  async function getAsistencias(cursoId: string) {
    const asistencias = await API.graphql<GraphQLQuery<ListAsistenciasQuery>>(
      {
        query: queries.listAsistencias,
        variables: { cursoId: cursoId, estudianteId: estudianteId }
      }
    );
    const res = asistencias?.data?.listAsistencias?.items;
    return (res as any[]);
  }

  useEffect(() => {
    if (!router.isReady) {return;}
    getEstudiante().then((est) => {
      setEstudiante(est);
      setCursos(est.cursos.items);
      setAsistencias(est.asistencia.items);
    });
  }, [router.isReady]);

  useEffect(() => {
    const subOnAsistenciaCreate = API.graphql<GraphQLSubscription<OnCreateAsistenciaSubscription>>(
      graphqlOperation(subscriptions.onCreateAsistencia, {cursoId: cursoSelectedId, estudianteId: estudianteId})
    ).subscribe({
      next: ({ provider, value }) => {
        setAsistencias([...asistencias, value.data?.onCreateAsistencia]);
      },
      error: (error) => console.warn(error)
    });
    return () => {
      subOnAsistenciaCreate.unsubscribe();
    };
  }, [asistencias]);

  function onClickCurso(cursoId: string) {
    cursoSelectedId = cursoId;
    getAsistencias(cursoId).then((asistencias) => {
      setAsistencias(asistencias);
    });
  }

  return (
    <div className="overflow-hidden flex flex-col flex-1 h-full w-full p-2.5 gap-y-2.5">
      <div className="flex font-bold text-slate-700 text-xl justify-start">Información del estudiante</div>
      <section id="info-estudiante" className="flex flex-col">
        {

          <div className="grid grid-cols-2 gap-2.5">
            <div className="flex items-end justify-end font-bold text-slate-700 text-md"><>Matrícula:</></div>
            <div className="text-md">{estudiante?.matricula}</div>

            <div className="flex items-end justify-end font-bold text-slate-700 text-md"><>Primer nombre:</></div>
            <div className="text-md">{estudiante?.nombres}</div>

            <div className="flex items-end justify-end font-bold text-slate-700 text-md"><>Primer apellido:</></div>
            <div className="text-md">{estudiante?.apellidos}</div>

            <div className="flex items-end justify-end font-bold text-slate-700 text-md"><>Correo electrónico:</></div>
            <div className="text-md">{estudiante?.email}</div>

            <div className="flex items-end justify-end font-bold text-slate-700 text-md"><>Nombre de usuario ESPOL:</></div>
            <div className="text-md">{estudiante?.usuario}</div>
          </div>
        }
        
      </section>
      <hr className="-mb-2.5"/>
      <div className="grid grid-cols-2 gap-2.5">
       {
        cursos && asistencias?
        <>
        <section id="tabla-cursos" className="flex flex-col flex-1 overflow-auto">
          <Table shouldRemainHovered={true} onItemClick={onClickCurso} cols={["Nombre del curso","Paralelo", "Creacion"]} data={
            cursos.map((curso) => {
              return {
                id: curso.id,
                nombreCurso: curso.nombre,
                paraleloCurso: curso.paralelo,
                creacion:  curso.createdAt.split("T")[0]
              }
            })
          }/>
        </section>
        <section id="tabla-asistencias" className="flex flex-col flex-1 overflow-auto">
          <Table cols={["Fecha","Hora", "Dia"]} data={
            asistencias.map((asistencia) => {
              return {
                id: asistencia.id,
                nombreCurso: asistencia.nombre,
                paraleloCurso: asistencia.paralelo,
                creacion:  asistencia.createdAt.split("T")[0]
              }
            })
          }/>
        </section>
        </> :
        null
       }
      </div>
      
    </div>
  )
}