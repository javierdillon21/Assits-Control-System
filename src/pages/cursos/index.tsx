import { CreateCursoInput, CreateCursoMutation, Curso, DeleteCursoInput, DeleteCursoMutation, GetCursoQuery, GetCursoQueryVariables, ListCursosQuery, ListCursosQueryVariables, OnCreateCursoSubscription } from '@/API';
import CursoCard from '@/app/components/cursocard'
import '@/app/globals.css'
import { getCurso, listCursos } from '@/graphql/queries';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { useQuery } from 'urql';
import { GraphQLQuery, GraphQLSubscription } from '@aws-amplify/api';
import { useEffect, useState } from 'react';
import { createCurso, deleteCurso } from '@/graphql/mutations';
import NuevoCursoModal from '@/app/components/nuevocursomodal';
import cursos from '../cursos';
import { onCreateCurso } from '@/graphql/subscriptions';

export default function Cursos() {


  const [showNuevoCursoModal, setShowNuevoCursoModal] = useState(false);
  const onCloseNuevoCursoModal = () => {setShowNuevoCursoModal(false)};
  const [cursos, setCursos]= useState<CreateCursoInput[]| any>()

  useEffect(() => {
    getCursos().then((est) => setCursos(est));
  }, []);

  async function getCursos(){
    const allCursos = await API.graphql<GraphQLQuery<ListCursosQuery>>(
      {query: listCursos}
      );
    console.log(allCursos)
    let res = allCursos.data?.listCursos?.items;
    return (res as CreateCursoInput[]);
  }

  const subOnCreate = API.graphql<GraphQLSubscription<OnCreateCursoSubscription>>(
    graphqlOperation(onCreateCurso)
  ).subscribe({
    next: ({ provider, value }) => {
      setCursos([...cursos, value.data?.onCreateCurso]);
    },
    error: (error) => console.warn(error)
  });

  async function borrarTodo() {
    if (cursos.length == 0) return;
    cursos.map((curso: CreateCursoInput) => {
      const cursoDetails: DeleteCursoInput = {
        id : curso.id || ''
      };
      
      const deletedCurso = API.graphql<GraphQLQuery<DeleteCursoMutation>>({ 
        query: deleteCurso, 
        variables: { input: cursoDetails }
      });
    });
  }
  // async function createdata(){
  //   const inputs:CreateCursoInput={
  //     cursoProfesorId: "1",
  //     nombre: "Telemetria",
  //     cursoDispositivoId: '1',
  //     paralelo: '101',
  //     profesorCursosId: "1"
  //   }

  //   const newTodo = await API.graphql<GraphQLQuery<CreateCursoMutation>>({ 
  //     query: createCurso, 
  //     variables: { input:  inputs}
  //   });
  // }
  if (!cursos) return <></>
  return (
    <div className="overflow-hidden flex flex-col flex-1 w-full p-2.5 gap-y-2.5">
      <NuevoCursoModal visible={showNuevoCursoModal} onClose={onCloseNuevoCursoModal}/>
      <div className="flex flex-row h-10 items-center">
        <div className="flex flex-grow font-bold text-slate-700 text-xl">Cursos</div>
        <section id="add-curso" className="flex flex-grow justify-end">
          <button type="button" className="flex-flex-grow text-[0.9rem] bg-slate-700 rounded-lg hover:bg-slate-900 font-bold text-white p-2" onClick={() => {setShowNuevoCursoModal(!showNuevoCursoModal)}}>
          + Añadir curso
          </button>
        </section>
      </div>
      <hr/>
      <section id="cursos" className="-mb-2.5 grid h-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 overflow-auto gap-3 auto-rows-min">
          {
            cursos?.map((curso: any) => (
                <CursoCard curso={curso}/>
              )
            )
          }
          
      </section>
    </div>
  )
}