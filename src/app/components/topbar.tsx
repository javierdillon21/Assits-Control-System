import user_round_icon from "../../../assets/svg/user_round.svg";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Topbar(props: any) {
  const [show, showTopbar] = useState(false);
  const userName = "Nicolas Segovia";

  return (
      <div className="flex border-b  border-slate-300 mx-10 h-20 justify-end text-black">
        <img className="h-12" src={user_round_icon.src}/>
        <FontAwesomeIcon
              icon="users"
              size="lg"
              className="text-current scale-110"
            />
      </div>
  );
}