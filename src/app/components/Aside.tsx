'use client'

import Image from "next/image";
import { motion } from 'framer-motion'
import Link from "next/link";
import { FaHouse } from "react-icons/fa6";
import logo from '../../assets/logo.svg'
import { BsPersonAdd } from "react-icons/bs";
import { PiSignOutBold } from "react-icons/pi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";


export const signout = () => {
  console.log('signout')
}


const iconsData = [
  {
    icon: <FaHouse width={30} color="#FFA585 " />,
    title: 'Dashboard',
    link: '/',
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
    link: 'login',
    iconAlt: "person",
    action: signout
  }
]

export default function Aside() {


  return (

    < aside className="max-w-[15%] bg-white h-[100vh] px-5 py-10 " >
      <Image alt="capputeeno" src={logo} />


      <div className="flex flex-col h-[90%] mt-8">
        {iconsData.map((item, i) => {
          return (
            <motion.div
              key={item.title}
              className={` ${i === 1 && 'flex-1'}`}
            >

              <Link href={`/${item.link.toLowerCase()}`} className=" text-[#5d5d6d] font-semibold mb-2 flex gap-4 items-center" >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </motion.div>)
        })}
      </div>
    </aside >
  )
}
