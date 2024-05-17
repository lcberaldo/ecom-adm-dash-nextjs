
import Image from "next/image";
import { FaHouse } from "react-icons/fa6";
import logo from '../../../assets/logo.svg'
import { BsPersonAdd } from "react-icons/bs";
import { PiSignOutBold } from "react-icons/pi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

import Logout from "./Logout";



const iconsData = [
  {
    icon: <FaHouse width={30} color="#FFA585 " />,
    title: 'Dashboard',
    link: 'dashboard',
    iconAlt: "house"
  },
  {
    icon: <MdOutlineProductionQuantityLimits width={30} color="#FFA585 " />
    ,
    title: 'Products',
    link: 'products',
    iconAlt: ""
  },
  {
    icon: <BsPersonAdd width={30} color="#FFA585 " />,
    title: 'Members',
    link: 'members',
    iconAlt: "person"
  },
  {
    icon: <PiSignOutBold width={30} color="#FFA585 " />
    ,
    title: 'Signout',
    link: '/',
    iconAlt: "person",
    action: true
  }
]

export default function Aside() {

  return (

    < aside className="max-w-[15%] bg-white h-[100vh] px-5 py-10 " >
      <Image alt="capputeeno" src={logo} />


      <div className="flex flex-col h-[90%] mt-8">
        {iconsData.map((item, i) => {

          return (
            <Logout key={i} index={i} icon={item.icon} link={item.link} title={item.title} action={item.action} />
          )
        })}
      </div>
    </aside >
  )
}
