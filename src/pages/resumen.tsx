import Image from 'next/image';
import { useState } from 'react';
import Card from '@/app/components/card';
import user_round_icon from "../../assets/svg/user_round.svg";



export default function Resumen() {
  const firstName = "Nicolás";
  const lastName = "Segovia";
  const [estudiantes, setEstudiantes]= useState(0)

  return (
    <div className="flex flex-col flex-1 h-full w-full">
      <div className="bg-white h-full p-2.5">
        <div className="flex text-xl justify-start font-bold text-indigo-900">Bienvenido {firstName}!</div>
        
        <section id='cards' className='flex w-full gap-6'>
        <Card title='Estudiantes' value={estudiantes} icon={user_round_icon.src}></Card>
        <Card title='Cursos' value={estudiantes} icon={user_round_icon.src}></Card>
        <Card title='Avance del periodo' value={estudiantes} icon={user_round_icon.src}></Card>
        </section>
      </div>
    </div>
  )
}