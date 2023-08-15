import { useForm } from 'react-hook-form';

export default function NuevoEstudianteModal(props: {
  visible: boolean,
  onClose: Function
}) {
  
  if (!props.visible) return null;

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const handleOnClose = (event: any) => {
    if (event.target.id === "modal-background") {
      props.onClose();
    }
  };

  const registrarEstudiante = (data: any) => {
    Object.keys(data).map(key => {
      data[key] = data[key].toLowerCase();
    })
    data.firstName = capFirstLetter(data.firstName);
    data.lastName = capFirstLetter(data.lastName);
    data.espolEmail = data.espolUser + "@espol.edu.ec";
    console.log(data);
  }

  function capFirstLetter(str: string) {
    return str[0].toUpperCase() + str.slice(1);
  }

  return (
    <div onClick={handleOnClose} id="modal-background"
    className="fixed inset-0 bg-black bg-opacity-5 backdrop-filter backdrop-blur-sm flex justify-center items-center">
      <form id="estudiante-nuevo" className="flex flex-col bg-white p-2.5 rounded-lg" onSubmit={handleSubmit(registrarEstudiante)}>
        <input {...register("firstName", {required: true, maxLength: 20, pattern: {
        value: /^[A-Z][a-z]+$/i,
        message: "Nombre invalido"}})}/>
        <input {...register("lastName", {required: true, maxLength: 20, pattern: {
        value: /^[A-Z][a-z]+$/i,
        message: "Apellido invalido"}})}/>
        <input {...register("espolUser", {required: true, maxLength: 20, pattern: {
        value: /^[A-Z][a-z]+$/i,
        message: "Username invalido"
        }})}/>
        <input type="submit"/>
      </form>
    </div>
  );
}