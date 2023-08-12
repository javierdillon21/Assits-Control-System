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
    <section id='menu' className="flex flex-col shrink-0 w-1/6 h-full bg-slate-800 text-white gap-8 py-10">
        <div className="flex flex-col justify-center items-center ">
        <Image
          src={user_round_icon.src}
          width={80}
          height={80}
          alt="assist-control-system"
          objectFit='scale-down'
        />
          <p>
          {userName}
          </p>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          {
            sections.map(({id, title, icon, route}) => (
              <div key={id} className="flex h-12 justify-center items-center w-4/5">
                <div onClick={() => goTo(route)} className={`flex h-full grow gap-4 items-center text-base ${props.thisPage == id? "bg-slate-950": "bg-transparent"} py-1 px-4 rounded-lg hover:bg-slate-950 font-normal`}>
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