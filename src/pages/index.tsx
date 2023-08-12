import acs_logo from '../../assets/img/ACS_logo.png';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import '@/app/globals.css'

export default function Home() {
  const router = useRouter();
  const login =  () => {
    // TODO: VALIDATION
    router.push("/resumen");
  };

  return (
    <main className="flex flex-1 flex-col h-full items-center sm:px-12 sm:py-12 px-24 py-24 bg-slate-800">
      <section id="Caja Login" className="flex flex-col bg-white gap-4 rounded-lg sm:px-6 sm:py-6 px-12 py-12 h-2/5 w-1/4">
        <div className="flex h-1/3 justify-center items-center">
            <Image
          src={acs_logo.src}
          width={150}
          height={150}
          alt="assist-control-system"
          objectFit='scale-down'
        />
        </div>
        <form className="flex flex-col gap-2">
          <div className="flex justify-center font-bold text-slate-900 text-xl">Login</div>
          <div className="flex justify-center">
            <input className="pl-1 text-slate-500 border focus:border-slate-700 focus:outline-none border-slate-400 rounded-lg text-[0.9rem]"
              placeholder="E-mail"/>
          </div>
          <div className="flex justify-center items-center">
            <input className="pl-1 text-slate-500 border focus:border-slate-700 focus:outline-none border-slate-400 rounded-lg text-[0.9rem]"
              placeholder="Password" type="password"/>
          </div>
        </form>
          <div className="flex justify-center items-center">
            <button onClick={login} type="button"
              className="text-[0.9rem] bg-slate-800 border py-1 px-4 rounded-lg hover:bg-slate-700 font-bold text-white">
              Iniciar Sesión
            </button>
          </div>
      </section>
    </main>
  )
}