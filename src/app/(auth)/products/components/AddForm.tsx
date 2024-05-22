'use client'

import Image from "next/image"
import backButton from '@/assets/back-icon.svg'
import Link from "next/link"
import { SyntheticEvent } from "react"
import { AddProductAction } from "@/actions/loggedActions"
import { useRouter } from "next/navigation"



export default function AddForm() {
  const router = useRouter()


  async function handleSubmitForm(event: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    event.preventDefault()

    const form = event.currentTarget

    const formElements = form.elements as typeof form.elements & {
      title: HTMLInputElement,
      image_url: HTMLInputElement,
      description: HTMLInputElement
      category: HTMLInputElement
      price_in_cents: HTMLInputElement
    }

    const title = formElements.title.value
    // const image_url = formElements.image_url.value
    const description = formElements.description.value
    const category = formElements.category.value
    const price_in_cents = Number(formElements.price_in_cents.value)

    const response = await AddProductAction({
      title,
      description,
      category,
      price_in_cents
    })

    router.replace('/products')
  }


  return (
    <form onSubmit={handleSubmitForm} className=" flex-col flex">
      <input type="text" name="category" className='block mb-3 px-1 rounded py-1 ' placeholder={'Category'} />

      <input type="text" name="title" className='text-3xl font-light mb-3 rounded py-1 px-1' placeholder={'Title'} />

      <input type="text" name="price_in_cents" className='text-[#09090A] font-semibold mb-6 px-1 rounded py-1' placeholder={'R$ 49,90'} />


      <span className='block uppercase font-medium text-[#737380] mb-2'>description</span>

      <textarea name="description" rows={4} placeholder={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, aspernatur nobis? Sapiente amet nihil dignissimos provident placeat, natus rem eum maxime itaque necessitatibus laborum ab, veritatis molestias ad eaque reprehenderit!'} className='text-[14px] min-w-[30vw] mb-4 md:mb-0 px-1 rounded py-1' />

      <div className="mt-5 flex justify-between">

        <button type="submit" className="px-4 py-1 bg-[#FFA585] text-[#737380] capitalize font-bold rounded outline-none">Add</button>

        <Link href={'/products'} className="px-4 py-2 bg-[#737380] text-white capitalize font-bold rounded flex gap-1 ">
          <Image width={20} height={20} src={backButton} alt="" className="brightness-[200%] relative top-[2px]" />
          <span>back</span>
        </Link>
      </div>
    </form>
  )
}
