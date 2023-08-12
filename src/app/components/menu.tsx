"use client";
import burguer_menu_icon from "../../../assets/svg/burguer_menu.svg"
import acs_logo_white from "../../../assets/img/ACS_logo_white.png";
import user_round_icon from "../../../assets/svg/user_round.svg";
import home_icon from '../../../assets/svg/home.svg';
import file_icon from '../../../assets/svg/file.svg';
import book_icon from '../../../assets/svg/book.svg';
import { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Menu(props: any) {
  const [show, showMenu] = useState(false);
  const userName = "Nicolas Segovia";
  const sections = [
    {id: 0, title: "Resumen", icon: home_icon.src, route: "/resumen"},
    {id: 1, title: "Estudiantes", icon: file_icon.src, route: "/estudiantes"},
    {id: 2, title: "Cursos", icon: book_icon.src, route: "/cursos"},
  ];

  const router = useRouter();
  const goTo = (route: string) => {
    router.push(route);
  }

  return (
    <section id='menu' className="flex flex-col shrink-0 w-1/6 h-full pt-4 drop-shadow-2xl bg-slate-800 text-white">
        <div className="flex justify-center items-center">
          <img className="h-11 xl:h-20" src={user_round_icon.src}/>
        </div>
        <div className="xl:text-lg text-sm flex justify-center items-center font-bold mb-3.5">
          {userName}
        </div>
        <div className="flex flex-col gap-3">
          {
            sections.map(({id, title, icon, route}) => (
              <div key={id} className="flex justify-center items-center">
                <button onClick={() => goTo(route)} className={`flex items-stretch grow text-[0.8rem] ${props.thisPage == id? "bg-slate-950": "bg-transparent"} py-1 px-4 rounded-lg hover:bg-slate-950 font-bold`}>
                  <img className=" flex-none" src={icon}/>
                  <div className="flex grow justify-center items-center">{title}</div>
                </button>
              </div>
            ))
          }          
        </div>
    </section>
  );
}