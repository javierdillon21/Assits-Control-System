
import Menu from '@/app/components/menu';
import '@/app/globals.css'

export default function Resumen() {
  const firstName = "Nicolás";
  const lastName = "Segovia";

  return (
    <div className="flex flex-col flex-1 h-full w-full">
      <div className="bg-white h-full p-2.5">
        <div className="flex text-xl justify-start font-bold text-indigo-900">Bienvenido {firstName}!</div>
      </div>
    </div>
  )
}