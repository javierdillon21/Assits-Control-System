"use client";
import burguer_menu_icon from "../../../assets/svg/burguer_menu.svg"
import acs_logo_white from "../../../assets/img/ACS_logo_white.png";
import user_round_icon from "../../../assets/svg/user_round.svg";
import home_icon from '../../../assets/svg/home.svg';
import file_icon from '../../../assets/svg/file.svg';
import book_icon from '../../../assets/svg/book.svg';
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Sidebar(props: any) {
  const [show, showSidebar] = useState(false);
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
    <>
    {!show? (
      <button className="top-0 left-0 fixed" onClick={() => showSidebar(!show)}>
        <img src={burguer_menu_icon.src}/>
      </button>
      
    ) : (
      <button className="text-white font-bold top-3.5 left-3.5 fixed z-10" onClick={() => showSidebar(!show)}>
        X
      </button>
    )}
      <div className="fixed top-0 right-0">
        <img className="h-12" src={acs_logo_white.src}/>
      </div>
      <div className={`top-0 left-0 fixed drop-shadow-2xl bg-slate-900 text-white h-screen w-[40vw] xl:w-[20vw] p-5
        ${show? 'translate-x-0' : '-translate-x-full'} ease-in-out duration-200`}>
        <div className="flex justify-center items-center">
          <img className="h-11 xl:h-20" src={user_round_icon.src}/>
        </div>
        <div className="xl:text-lg text-sm flex justify-center items-center font-bold mb-3.5">
          {userName}
        </div>
        <div className="space-y-3.5">
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
      </div>
    </>
  );
}