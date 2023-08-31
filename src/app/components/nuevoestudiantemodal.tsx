import { useForm } from 'react-hook-form';
import * as mutations from '../../graphql/mutations';
import { API } from 'aws-amplify';
import { CreateEstudianteInput, CreateEstudianteMutation, ListEstudiantesQuery } from '@/API';
import { GraphQLQuery } from '@aws-amplify/api';

export default function NuevoEstudianteModal(props: {
  visible: boolean,
  onClose: Function
}) {
  
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<CreateEstudianteInput>();
  if (!props.visible) return null;

  const handleOnClose = (event: any) => {
    if (event.target.id === "modal-background") {
      props.onClose();
    }
  };

  const registrarEstudiante = async (data: any) => {
    Object.keys(data).map(key => {
      data[key] = data[key].toLowerCase();
    })
    data.nombres = capFirstLetter(data.nombres);
    data.apellidos = capFirstLetter(data.apellidos);
    data.email = data.usuario + "@espol.edu.ec";
    const queryData: CreateEstudianteInput = data;
    try{
      const newEstudiante = await API.graphql<GraphQLQuery<CreateEstudianteMutation>>({
        query: mutations.createEstudiante,
        variables: {input: queryData}
      });
      reset();
      props.onClose();
    } catch (error: any) {
      console.log(error);
    }
  }

  function capFirstLetter(str: string) {
    return str[0].toUpperCase() + str.slice(1);
  }

  return (
    <div onClick={handleOnClose} id="modal-background"
    className="fixed inset-0 bg-black bg-opacity-5 backdrop-filter backdrop-blur-sm flex justify-center items-center">
      <form id="estudiante-nuevo" className="flex flex-col bg-white p-8 rounded-lg gap-3" onSubmit={handleSubmit(registrarEstudiante)}>
        <div className="flex justify-center font-bold text-slate-900 text-lg">Registrar Estudiante</div>
        <input className="pl-1 text-slate-500 border focus:border-slate-700 focus:outline-none border-slate-400 rounded-lg text-[0.9rem]"
          placeholder="Nombre" {...register("nombres", {required: true, maxLength: 20, pattern: {
          value: /^[A-Z][a-z]+$/i,
          message: "Nombre invalido"}})}/>
        <input  className="pl-1 text-slate-500 border focus:border-slate-700 focus:outline-none border-slate-400 rounded-lg text-[0.9rem]"
          placeholder="Apellido" {...register("apellidos", {required: true, maxLength: 20, pattern: {
          value: /^[A-Z][a-z]+$/i,
          message: "Apellido invalido"}})}/>
        <input  className="pl-1 text-slate-500 border focus:border-slate-700 focus:outline-none border-slate-400 rounded-lg text-[0.9rem]"
          placeholder="Usuario ESPOL" {...register("usuario", {required: true, maxLength: 20, pattern: {
          value: /^[A-Z][a-z]+$/i,
          message: "Username invalido"}})}/>
         <input  className="pl-1 text-slate-500 border focus:border-slate-700 focus:outline-none border-slate-400 rounded-lg text-[0.9rem]"
            placeholder="Número de cedula" {...register("cedula", {required: true, maxLength: 20, pattern: {
            value: /^[0-9]{10}$/i,
            message: "Matricula invalida"}})}/>
        <input className="flex-flex-grow text-[0.9rem] bg-slate-700 rounded-lg hover:bg-slate-900 font-bold text-white p-2"
          value="Añadir" type="submit"/>
      </form>
    </div>
  );
}