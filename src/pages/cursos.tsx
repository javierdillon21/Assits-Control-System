import '@/app/globals.css'
import Sidebar from "@/app/components/sidebar";

export default function Resumen() {
  return (
    <main className="h-screen sm:pt-12 pt-12 bg-slate-900">
      <Sidebar thisPage={2}></Sidebar>
      <div className="bg-white h-full flex justify-center">
        <h1 className="text-black font-bold">Cursos</h1>
      </div>
    </main>
  )
}