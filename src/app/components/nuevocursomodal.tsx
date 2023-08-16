import { CreateCursoInput, CreateEstudianteInput } from '@/API';
import { createEstudiante } from '@/graphql/mutations';
import { useForm } from 'react-hook-form';

export default function NuevoCursoModal(props: {
  visible: boolean,
  onClose: Function
}) {
  
  if (!props.visible) return null;

  const { register, handleSubmit, watch, formState: { errors } } = useForm<CreateCursoInput>();

  const handleOnClose = (event: any) => {
    if (event.target.id === "modal-background") {
      props.onClose();
    }
  };
 CreateEstudia
  const submitCurso = (data: CreateEstudianteInput) => {
    // Object.keys(data).map(key => {
    //   data[key] = data[key].toLowerCase();
    // })
    // data.nombre = capFirstLetter(data.firstName);
    // data.paralelo = capFirstLetter(data.lastName);
    // data.cursoProfesorId = ";
    // data.cursoDispositivoId= " "

    console.log(data);
  }

  function capFirstLetter(str: string) {
    return str[0].toUpperCase() + str.slice(1);
  }

  return (
    <div onClick={handleOnClose} id="modal-background"
    className="fixed inset-0 bg-black bg-opacity-5 backdrop-filter backdrop-blur-sm flex justify-center items-center">
      <form id="Nuevo" className="flex flex-col w-2/3 h-4/5 bg-white p-2.5 rounded-lg" onSubmit={handleSubmit(submitCurso)}>
        <input {...register("nombre", {required: true, maxLength: 20, pattern: {
        value: /^[A-Z][a-z]+$/i,
        message: "Nombre invalido"}})}/>
        <input {...register("paralelo", {required: true, maxLength: 20, pattern: {
        value: /^[A-Z][a-z]+$/i,
        message: "Apellido invalido"}})}/>
        <input {...register("cursoProfesorId", {required: true, maxLength: 20, pattern: {
        value: /^[A-Z][a-z]+$/i,
        message: "Username invalido"
        }})}/>
        <button>Submit</button>
      </form>
    </div>
  );
}