'use server'

import { cookies } from "next/headers"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();


export async function SignoutAction() {

  cookies().delete("Authorization")

  const cookie = cookies().getAll('Authorization')

  return cookie

}


export async function getUserInfoAction(userId: number) {

  console.log(userId)

  const userInfo = await prisma.user.findFirst({
    where: {
      id: userId
    }
  })

  if (userInfo) {
    const { username, name, email, id } = userInfo
    return { username, name, email, id }
  }

  return ({ message: 'teste' })
}

