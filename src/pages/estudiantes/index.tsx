import NuevoEstudianteModal from '@/app/components/nuevoestudiantemodal';
import Table from '@/app/components/table'
import '@/app/globals.css'
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLQuery, GraphQLSubscription } from '@aws-amplify/api';
import * as queries from '../../graphql/queries';
import * as subscriptions from '../../graphql/subscriptions';
import { useEffect, useState } from 'react';
import { DeleteEstudianteInput, DeleteEstudianteMutation, ListEstudiantesQuery, OnCreateEstudianteSubscription, OnDeleteEstudianteSubscription } from '@/API';
import * as mutations from '../../graphql/mutations';
import { useRouter } from 'next/router';

export default function Estudiantes() {

  const [estudiantes, setEstudiantes] = useState<any[]>([]);
  const [estudiantesFiltered, setEstudiantesFiltered] = useState<any[]>([]);
  const [showNuevoEstudianteModal, setShowNuevoEstudianteModal] = useState(false);
  const onCloseNuevoEstudianteModal = () => {setShowNuevoEstudianteModal(false)};
  const router = useRouter();

  async function getEstudiantes() {
    const allEstudiantes = await API.graphql<GraphQLQuery<ListEstudiantesQuery>>(
      {query: queries.listEstudiantes}
    );
    const res = allEstudiantes.data?.listEstudiantes?.items;
    return (res as any[]);
  }

  async function borrarById(id: string) {
    const estudianteDetails: DeleteEstudianteInput = {
      id: id
    };
    const deletedEstudiante = API.graphql<GraphQLQuery<DeleteEstudianteMutation>>({ 
      query: mutations.deleteEstudiante, 
      variables: { input: estudianteDetails }
    });
  }

  function viewEstudiante(id: string) {
    router.push("/estudiantes/" + id);
  }

  function buscarEstudiante(event: any) {
    setEstudiantesFiltered(estudiantes.filter((est) => {
      const minusc = event.target.value.toLowerCase();
      return (minusc === est.nombres.toLowerCase() ||
      minusc === est.apellidos.toLowerCase() ||
      minusc === est.cedula.toLowerCase() ||
      minusc === est.usuario.toLowerCase());
    }));
  }

  useEffect(() => {
    getEstudiantes().then((est) => {
      setEstudiantes(est);
    });
  }, []);

  useEffect(() => {
    const subOnCreate = API.graphql<GraphQLSubscription<OnCreateEstudianteSubscription>>(
      graphqlOperation(subscriptions.onCreateEstudiante)
    ).subscribe({
      next: ({ provider, value }) => {
        setEstudiantes([...estudiantes, value.data?.onCreateEstudiante]);
      },
      error: (error) => console.warn(error)
    });

    const subOnDelete = API.graphql<GraphQLSubscription<OnDeleteEstudianteSubscription>>(
      graphqlOperation(subscriptions.onDeleteEstudiante)
    ).subscribe({
      next: ({ provider, value }) => {
        setEstudiantes(estudiantes.filter((est)=>(est.id !== value.data?.onDeleteEstudiante?.id)))
      },
      error: (error) => console.warn(error)
    });

    return () => {
      subOnCreate.unsubscribe();
      subOnDelete.unsubscribe();
    };
  }, [estudiantes]);

  return (
    <div className="overflow-hidden flex flex-col flex-1 h-full w-full p-2.5 gap-y-2.5">
      <NuevoEstudianteModal visible={showNuevoEstudianteModal} onClose={onCloseNuevoEstudianteModal}/>
      <div className="flex flex-row h-10 items-center">
        <div className="flex flex-grow font-bold text-slate-700 text-xl">Estudiantes</div>
        <section id="busqueda-estudiantes" className="flex flex-grow justify-end gap-x-3">
          <input onKeyUp={buscarEstudiante}className="flex flex-grow pl-1 text-slate-500 border focus:border-slate-700 focus:outline-none border-slate-400 rounded-lg text-[0.9rem]"
              placeholder="Buscar..."/>
          <button type="button" onClick={() => {setShowNuevoEstudianteModal(true)}}
          className="flex-flex-grow text-[0.9rem] bg-slate-700 rounded-lg hover:bg-slate-900 font-bold text-white p-2">
          + Añadir estudiante
          </button>
        </section>
      </div>
      <hr className="-mb-2.5"/>
      <section id="tabla-estudiantes" className="flex flex-col flex-1 overflow-auto">
          <Table onItemView={viewEstudiante} onItemDelete={borrarById} cols={["cedula","Nombre", "Fecha de registro", "Correo", "Espol User"]} data={
            estudiantesFiltered.length == 0?
            estudiantes.map((estu)=> {
              return {
                id: estu.id,
                cedula: estu.cedula,
                name: estu.nombres + " " + estu.apellidos,
                regDate: estu.createdAt.split("T")[0],
                email: estu.email,
                user: estu.usuario
              };
            }) :
            estudiantesFiltered.map((estu)=> {
              return {
                id: estu.id,
                cedula: estu.cedula,
                name: estu.nombres + " " + estu.apellidos,
                regDate: estu.createdAt.split("T")[0],
                email: estu.email,
                user: estu.usuario
              };
            })
          }></Table>
      </section>
    </div>
  )
}