import '@/app/globals.css'
import Sidebar from "@/app/components/sidebar";
import Menu from '@/app/components/menu';

export default function Resumen() {
  return (
    <main className="flex h-full w-full">
      <Menu thisPage={1}/> 
      <div className="bg-white h-full flex justify-center">
        <h1 className="text-black font-bold">Estudiantes</h1>
      </div>
    </main>
  )
}