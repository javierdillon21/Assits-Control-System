import '@/app/globals.css'
import Sidebar from "@/app/components/sidebar";

export default function Resumen() {
  const firstName = "Nicolás";
  const lastName = "Segovia";

  return (
    <main className="h-screen sm:pt-12 pt-12 bg-slate-900">
      <Sidebar thisPage={0}></Sidebar>
      <div className="bg-white h-full p-2.5">
        <div className="flex text-xl justify-start font-bold block text-indigo-900">Bienvenido {firstName}!</div>
      </div>

    </main>
  )
}