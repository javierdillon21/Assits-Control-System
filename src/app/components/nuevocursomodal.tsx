import { CreateCursoInput, CreateEstudianteInput, CreateHorarioInput } from '@/API';
import { Horarios} from '@/data';
import { createEstudiante } from '@/graphql/mutations';
import { useFieldArray, useForm } from 'react-hook-form';

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
    horario: [{dia: "LUNES", horaDesde: "00:00", horaHasta: "00:00"}]
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

  const submitForm = (data: CreateCursoInput) => {
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
      <form id="Nuevo" className="flex flex-col shrink-0 h-4/5 gap-5 bg-white p-10 rounded-lg" onSubmit={handleSubmitCurso(submitForm)}>
      <p className='text-2xl font-bold'>Crear curso</p>
        <div className='flex w-full justify-center gap-10'>
        <input placeholder='Nombre' 
        {...registerCurso("nombre", {required: true, maxLength: 20, pattern: {
        value: /^[A-Z][a-z]+$/i,
        message: "Nombre invalido"}})}
        className={inputStyle}/>

        <input placeholder='Paralelo'
        {...registerCurso("paralelo", {required: true, maxLength: 20, pattern: {
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
                horaDesde: "00:00",
                horaHasta: "00:00"
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
                  {...registerHorario(`horario.${index}.dia`, {required: true, maxLength: 20, pattern: {
                  value: /^[A-Z][a-z]+$/i,
                  message: "Username invalido"
                }})}
                className={inputStyle}/>
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
                    valueAsNumber: true,
                    required: true
                  })}
                  className={errorHorario?.horario?.message? "error" : ""}
                />
                </label>

                <button className="flex w-12 items-center justify-center  bg-red-800 rounded-lg hover:bg-red-700 font-semibold text-white p-2" type="button" onClick={() => remove(index)}>
                  x
                </button>
              </section>

          );
        })}
        </div>

        </div>

        
    
        <button className="flex w-32 items-center justify-center self-center  bg-slate-700 rounded-lg hover:bg-slate-900 font-bold text-white p-2">Crear</button>
      </form>
    </div>
  );
}