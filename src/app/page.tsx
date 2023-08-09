"use client";
import acs_logo from '../../assets/img/ACS_logo.png';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const login =  () => {
    // TODO: VALIDATION
    router.push("/resumen");
  };

  return (
    <main className="flex flex-col h-screen items-center sm:px-12 sm:py-12 px-24 py-24 bg-slate-900">
      <div className="bg-white rounded-lg sm:px-6 sm:py-6 px-12 py-12">
        <div className="flex justify-center items-center">
          <img className="h-14" src={acs_logo.src} alt="logo"/>
        </div>
        <form className="space-y-1.5">
          <div className="flex justify-center font-bold block text-indigo-900">Login</div>
          <div className="flex justify-center">
            <input className="pl-1 text-slate-500 border focus:border-indigo-700 focus:outline-none border-indigo-400 rounded-lg text-[0.9rem]"
              placeholder="E-mail"/>
          </div>
          <div className="flex justify-center items-center">
            <input className="pl-1 text-slate-500 border focus:border-indigo-700 focus:outline-none border-indigo-400 rounded-lg text-[0.9rem]"
              placeholder="Password" type="password"/>
          </div>
          <div className="flex justify-center items-center">
            <button onClick={login} type="button"
              className="text-[0.9rem] bg-indigo-900 border border-blue-800 py-1 px-4 rounded-lg hover:bg-indigo-950 font-bold">
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
