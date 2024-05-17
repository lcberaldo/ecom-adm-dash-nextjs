'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'
import { SignoutAction } from "@/actions/loggedActions";
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';


type ButtonProps = {
  title: string,
  action?: boolean,
  icon: ReactNode,
  link: string,
  index: number

}

export default function Logout({ title, action, icon, link, index }: ButtonProps) {
  const router = useRouter()

  async function handleSignout() {
    const cookier = await SignoutAction()

    router.replace('/')
  }

  return (
    <motion.div
      key={title}
      className={` ${index === 1 && 'flex-1'}`}
    >
      {action ? (
        <button onClick={handleSignout} className=" text-[#5d5d6d] font-semibold mb-2 flex gap-4 items-center">
          {icon}
          <span>{title}</span>
        </button>
      ) : (
        <Link href={`/${link.toLowerCase()}`} className=" text-[#5d5d6d] font-semibold mb-2 flex gap-4 items-center" >
          {icon}
          <span>{title}</span>
        </Link>
      )
      }


    </motion.div >)
}
