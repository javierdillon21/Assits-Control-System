import user_round_icon from "../../../assets/svg/user_round.svg";
import home_icon from '../../../assets/svg/home.svg';
import file_icon from '../../../assets/svg/file.svg';
import book_icon from '../../../assets/svg/book.svg';
import acs_logo_white from '../../../assets/img/ACS_logo_white.png';
import { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/router';

export default function Menu(props: any) {
  const [show, showMenu] = useState(false);
  const userName = "Nicolas Segovia";
  const sections = [
    {title: "Resumen", icon: home_icon.src, route: "/resumen"},
    {title: "Estudiantes", icon: file_icon.src, route: "/estudiantes"},
    {title: "Cursos", icon: book_icon.src, route: "/cursos"},
  ];

  const router = useRouter();
  const goTo = (route: string) => {
    router.push(route);
  }

  return (
    <section id='menu' className="flex flex-col shrink-0 w-72 h-full bg-slate-800 text-white gap-8 py-10">
        <div className="flex flex-col justify-center items-center ">
        <Image
          src={acs_logo_white.src}
          width={140}
          height={140}
          alt="assist-control-system"
          objectFit='scale-down'
        />
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          {
            sections.map(({title, icon, route}) => (
              <div key={route} className="flex h-12 justify-center items-center w-4/5">
                <div onClick={() => goTo(route)} className={`flex h-full grow gap-4 items-center text-base ${router.pathname == route? "bg-slate-950": "bg-transparent"} py-1 px-4 rounded-lg hover:bg-slate-950 font-normal`}>
                  <img className=" flex-none" />
                  <Image
                    src={icon}
                    width={28}
                    height={28}
                    alt="assist-control-system"
                    objectFit='scale-down'
                  />
                  <p className="flex grow items-center">{title}</p>
                </div>
              </div>
            ))
          }          
        </div>
    </section>
  );
}