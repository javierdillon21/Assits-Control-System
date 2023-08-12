import user_round_icon from "../../../assets/svg/user_round.svg";
import { useState } from "react";
import Image from "next/image";


export default function Card(props:{
    title: string
    value: number
    icon: string
}) {

    const [estudiantes, setEstudiantes]= useState(0)

  return (
    <div className='flex flex-col h-52 w-52 items-center justify-center gap-4 border rounded-lg border-slate-200 bg-gray-100 '>
    <Image
      src={props.icon}
      width={60}
      height={60}
      alt="assist-control-system"
      objectFit='scale-down'
    />
    <p className='text-slate-800'>{props.title}</p>
    <p className='text-3xl font-bold'>{props.value}</p>
    </div>
  );
}