'use server'

import { cookies } from "next/headers"
import { PrismaClient } from "@prisma/client"
import { Product } from "@/types";
import { redirect } from "next/navigation";



const prisma = new PrismaClient();


export async function Signout() {

  cookies().delete("Authorization")

  const cookie = cookies().getAll('Authorization')

  return cookie

}

export async function getUserInfo(userId: number) {
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

export async function getAllProducts() {
  try {
    const products = prisma.product.findMany()

    return products

  } catch (error) {
    console.log(error);

  }
}

export async function getProductById(id: number) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id
      }
    })

    return product
  } catch (error) {
    console.log(error);
  }
}

export async function AddProductAction({
  title,
  description,
  category,
  price_in_cents
}: Product) {

  try {


    const createdProduct = await prisma.product.create({
      data: {
        title,
        image_url: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        description,
        category,
        price_in_cents
      },
    })

    return { product: createdProduct }


  } catch (error) {
    return ({ message: 'something is wrong' })
  }


}

export async function deleteById(id: number) {
  try {
    const deletedProduct = await prisma.product.delete({
      where: {
        id
      }
    })

    return deletedProduct
  } catch (error) {
    console.log(error);
  }
}

export async function getMembers() {
  try {
    const members = await prisma.user.findMany()

    return members
  } catch (error) {
    // return ({ message: 'no users' })

    console.log(error);
  }
}

