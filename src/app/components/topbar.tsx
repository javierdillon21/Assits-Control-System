import user_round_icon from "../../../assets/svg/user_round.svg";
import { useState } from "react";
import { useRouter } from 'next/navigation';


export default function Topbar(props: any) {
  const [show, showTopbar] = useState(false);
  const firstName = props.firstName? props.firstName : "Nicolas";
  const lastName = props.lastName? props.lastName : "Segovia";
  
  return (
      <div className="flex h-14 bg-primary-100 justify-end border-l py-1 px-2 gap-x-3">
        <img className="h-12" src={user_round_icon.src}/>
        <div className="flex items-center">
          <div className="text-white font-bold">{firstName} {lastName}</div>
        </div>
      <div/>
      </div>
  );
}