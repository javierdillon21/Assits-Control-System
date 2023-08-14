import Image from 'next/image';
import { useState } from 'react';
import ResumenCard from '@/app/components/resumencard';
import user_round_icon from "../../assets/svg/user_round.svg";



export default function Resumen(props: any) {
  //const firstName = "Nicolás";
  const [firstName, setFirstName] = useState("Nicolas");
  const [lastName, setLastName] = useState("Segovia")
  const [estudiantes, setEstudiantes]= useState(0)

  return (
    <div className="flex flex-col flex-1 h-full w-full">
      <div className="h-full p-2.5 space-y-3">
        <div className="flex flex-grow">
          <div className="w-3/4 font-bold text-slate-700 text-xl">
            ¡Bienvenido, {firstName}!
          </div>
        </div>
        <div className="flex flex-grow">
          <div className="w-3/4 text-slate-700">
            Optimiza tu gestión de asistencia y mejora la administración del seguimiento académico.
            ¡Comienza a explorar ahora!
          </div>
        </div>
        <div className="flex flex-grow">
          <div className="w-3/4 font-bold text-slate-700 text-lg">
            Resumen
          </div>
        </div>
        <section className="flex flex-grow">
          <div className="w-3/4 flex flex-row gap-3">
            <ResumenCard title='Estudiantes' value={estudiantes} icon={user_round_icon.src}></ResumenCard>
            <ResumenCard title='Cursos' value={estudiantes} icon={user_round_icon.src}></ResumenCard>
            <ResumenCard title='Avance del periodo' value={estudiantes} icon={user_round_icon.src}></ResumenCard>
          </div>
        </section>
      </div>
    </div>
  )
}