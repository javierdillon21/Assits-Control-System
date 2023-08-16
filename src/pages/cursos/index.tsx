import { CreateCursoInput, CreateCursoMutation, Curso, GetCursoQuery, GetCursoQueryVariables, ListCursosQuery, ListCursosQueryVariables } from '@/API';
import CursoCard from '@/app/components/cursocard'
import '@/app/globals.css'
import { getCurso, listCursos } from '@/graphql/queries';
import { API, Auth } from 'aws-amplify';
import { useQuery } from 'urql';
import { GraphQLQuery } from '@aws-amplify/api';
import { useEffect, useState } from 'react';
import { createCurso } from '@/graphql/mutations';
import NuevoCursoModal from '@/app/components/nuevocursomodal';

export default function Cursos() {

  const [showNuevoCursoModal, setShowNuevoCursoModal] = useState(false);
  const onCloseNuevoCursoModal = () => {setShowNuevoCursoModal(false)};

  //TODO: fetch cursos from database
  const [cursos, setCursos]= useState<CreateCursoInput>()

  async function fetchingdata(){
    const allTodos = await API.graphql<GraphQLQuery<ListCursosQuery>>(
      { query: listCursos }
      );
    console.log(allTodos)
  }

  async function createdata(){
    const inputs:CreateCursoInput={
      cursoProfesorId: "1",
      nombre: "Telemetria",
      cursoDispositivoId: '1',
      paralelo: '101',
      profesorCursosId: "1"
    }

    const newTodo = await API.graphql<GraphQLQuery<CreateCursoMutation>>({ 
      query: createCurso, 
      variables: { input:  inputs}
    });
  }

  useEffect(()=>{
    // createdata()
    fetchingdata()
  },[])
  
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
          {/* {
            cursos.map((curso) => (
              <CursoCard key={curso.id} curso={curso} color={curso.color}/>
            ))
          } */}
          
      </section>
    </div>
  )
}