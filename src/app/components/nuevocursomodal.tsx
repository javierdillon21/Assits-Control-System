import { CreateCursoInput, CreateCursoMutation, CreateEstudianteInput, CreateHorarioInput, CreateHorarioMutation } from '@/API';
import { Horarios} from '@/data';
import { createCurso, createEstudiante, createHorario } from '@/graphql/mutations';
import { useFieldArray, useForm } from 'react-hook-form';
import { API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';

export const inputStyle='flex border-b w-80 h-8 px-2'
export const labelStyle='flex flex-col text-sm font-medium text-gray-600'
export default function NuevoCursoModal(props: {
  visible: boolean,
  onClose: Function
}) {
  
  if (!props.visible) return null;

  const { register: registerCurso, handleSubmit: handleSubmitCurso , watch: watchCurso , formState: { errors: errorCurso }, control: controlCurso  } = useForm<CreateCursoInput>();
  const { register: registerHorario, handleSubmit: handleSubmitHorario , watch: watchHorario , formState: { errors: errorHorario }, control: controlHorario } = useForm<Horarios>({
    defaultValues:{
    horario: [{dia: "LUNES", horaDesde: "12:00", horaHasta: "12:00"}]
  }});

  const { fields, append, remove } = useFieldArray({
    name: "horario",
    control: controlHorario
  });

  const handleOnClose = (event: any) => {
    if (event.target.id === "modal-background") {
      props.onClose();
    }
  };

  console.log(watchHorario())
  const submitForm = async (data: CreateCursoInput) => {
    
    const cursoData: CreateCursoInput = data;
    try{
      const newCurso = await API.graphql<GraphQLQuery<CreateCursoMutation>>({
        query: createCurso,
        variables: {input: data}
      });
      console.log(" AQUI")
      // props.onClose();
    } catch (error: any) {
      console.log(error);
    }

    fields.forEach(async (horario, index)=>{
      try{
        const newHorario = await API.graphql<GraphQLQuery<CreateHorarioMutation>>({
          query: createHorario,
          variables: {input: horario}
        });
      } catch (error: any) {
        console.log(error);
      }
    })

    // props.onClose();

  }

  function capFirstLetter(str: string) {
    return str[0].toUpperCase() + str.slice(1);
  }

  return (
    <div onClick={handleOnClose} id="modal-background"
    className="fixed inset-0 bg-black bg-opacity-5 backdrop-filter backdrop-blur-sm flex justify-center items-center">
      <form id="Nuevo" className="flex flex-col shrink-0 h-4/5 gap-5 bg-white p-10 rounded-lg" onSubmit={()=>{
        console.log("dentro del handle")
        handleSubmitCurso(submitForm);
        handleSubmitHorario(()=>console.log("oka"));
      }}>
      <p className='text-2xl font-bold'>Crear curso</p>
        <div className='flex w-full justify-center gap-10'>
        <input placeholder='Nombre' 
        {...registerCurso("nombre", {required: true, maxLength: 100, pattern: {
        value: /^[A-Z][a-z]+$/i,
        message: "Nombre invalido"}})}
        className={inputStyle}/>

        <input placeholder='Paralelo'
        {...registerCurso("paralelo", {required: true, maxLength: 10, pattern: {
        value: /^[0-9]$/i,
        message: "Paralelo invalido"}})}
        className={inputStyle}/>
        </div>
        <div className='flex flex-col w-full gap-4'>
          <div className='flex w-full border-b h-8 items-baseline justify-between gap-10 pb-4'>
          <p className='font-medium text-lg text-slate-700'>Horarios</p>
          <button className="flex w-12 items-center justify-center self-center  bg-slate-700 rounded-lg hover:bg-slate-900 font-bold text-white p-2"
            type="button"
            onClick={() =>
              append({
                dia:"LUNES",
                horaDesde: "12:00",
                horaHasta: "12:00"
              })
            }
          >
            +
          </button>
          </div>

        <div className='flex flex-col w-full gap-2'>
        {fields.map((field, index) => {
          return (
            <section className="flex items-end gap-4 justify-between px-2" key={field.id}>
                <label className={labelStyle}> Dia
                <select placeholder='Dia'
                  {...registerHorario(`horario.${index}.dia`, {required: true})}
                className={inputStyle}>
                  <option>LUNES</option>
                  <option>MARTES</option>
                  <option>MIERCOLES</option>
                  <option>JUEVES</option>
                  <option>VIERNES</option>
                  <option>SABADO</option>
                  <option>DOMINGO</option>
                </select>
                </label>
                <label className={labelStyle}>  Desde
                <input
                  placeholder="Hora inicio"
                  type='time'
                  {...registerHorario(`horario.${index}.horaDesde`, {
                    required: true
                  })}
                  className={errorHorario?.horario?.message? "error" : ""}
                />
                </label>
                <label className={labelStyle}> Hasta
                <input
                  placeholder="Hora fin"
                  type='time'
                  {...registerHorario(`horario.${index}.horaHasta`, {
                    required: true
                  })}
                  className={errorHorario?.horario?.message? "error" : ""}
                />
                </label>

                {fields.length!=1 && <button className="flex w-12 items-center justify-center  bg-red-800 rounded-lg hover:bg-red-700 font-semibold text-white p-2" type="button" onClick={() => remove(index)}>
                  x
                </button>} 
              </section>

          );
        })}
        </div>

        </div>

        <input className="flex w-32 items-center justify-center self-center  bg-slate-700 rounded-lg hover:bg-slate-900 font-bold text-white p-2" type="submit" value="Crear" />
      </form>
    </div>
  );
}