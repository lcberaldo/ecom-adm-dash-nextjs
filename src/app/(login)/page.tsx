'use client'
import Link from "next/link"
import { loginAction } from "../../actions/loginAction";
import { useState } from "react";
import Container from "../components/Container";
import Image from "next/image";
import logo from '../../assets/logo.svg'


export default function Login() {


  const [isError, setIsError] = useState('')

  async function handleSignIn(e: FormData) {
    const res = await loginAction(e)


    // if (res.message) {
    //   setIsError(res.message)
    // }
  }

  return (
    <div >
      <Container className="flex items-center flex-col justify-center h-[90vh]">

        <form action={handleSignIn} className="w-[45%] h-[60%] flex flex-col items-center justify-center p-8 px-20 border-2 border-[#5D5D6D] rounded-xl">
          <Link href='/' className="mb-8">
            <Image src={logo} priority alt='capputeeno' className='' />
          </Link>

          <h1 className="text-[#41414D] pb-8 text-lg font-bold uppercase w-1/2 text-center  mb-4 after:h-1 after:w-full after:block after:bg-[#FFA585]" >Faça login</h1>

          <input className="w-full mb-5 py-0.5 px-2 rounded-lg border-[#5D5D6D] outline-[#ffa585] border-2 text-black" type="text" placeholder="Username" name="user" />
          <input className="w-full  py-0.5 px-2 rounded-lg border-[#5D5D6D] outline-[#ffa585] border-2 text-black" type="password" name="pass" id="" placeholder="password" />

          <p className="text-xs text-[#41414d] mt-2 text-center">{isError ? isError : <br />}</p>

          <span className="flex w-full justify-center gap-3 items-center mt-4">
            <input className="w-40 cursor-pointer border-2 border-[#ffa585]  text-white text-center  text-sm bg-[#FFA585] rounded py-2 px-4 font-bold uppercase" type="submit" value="Login" />
          </span>
        </form>
      </Container>
    </div>
  )
}




