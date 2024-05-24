'use client'

import React, { SyntheticEvent, useState } from 'react'
import AsyncImage from './AsyncImage'
import image from '@/assets/imgplaceholder.jpg'
import Link from "next/link"
import Image from "next/image"
import backButton from '@/assets/back-icon.svg'
import { Product } from '@/types'

type FormProps = {
  product: Product
}

export default function EditForm({ product }: FormProps) {
  const [formattedValue, setFormattedValue] = useState('')
  const [value, setValue] = useState(0)

  const price_BRL = (product.price_in_cents / 100).toLocaleString('pt-BR', { style: "currency", currency: "BRL" })

  function formatNumberToBRL(event: React.ChangeEvent<HTMLInputElement>): void {

    let userInput: string = event.target.value.replace(/[^0-9]/g, '');

    if (userInput === '') {
      setFormattedValue('R$ 0,00');
      setValue(0);
    } else {
      let userInputAsNumber: number = parseInt(userInput, 10) / 100;

      let formattedNumber: string = `R$ ${userInputAsNumber.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}`;

      setFormattedValue(formattedNumber);
      setValue(userInputAsNumber);
    }
  }

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
    const image_url = formElements.image_url.value
    const description = formElements.description.value
    const category = formElements.category.value
    const price_in_cents = formElements.price_in_cents.value

  }

  return (

    <form onSubmit={handleSubmitForm} className="  text-[#41414D] md:flex gap-8 items-stretch  max-w-md md:mt-0 mt-3">

      <AsyncImage image_url={product.image_url || image} name={product.title} />

      <div className="flex-col flex">
        <input type="text" name="category" className='block mb-3 px-1 bg-transparent ' placeholder={product.category} />

        <input type="text" name="title" className='text-3xl font-light mb-3 bg-transparent px-1' placeholder={product.title} />

        <input type="text" name="price_in_cents" className='text-[#09090A] font-semibold mb-6 px-1 bg-transparent' value={formattedValue} placeholder={price_BRL} onChange={formatNumberToBRL} />


        <span className='block uppercase font-medium text-[#737380] mb-2'>descrição</span>

        <textarea name="description" rows={6} placeholder={product.description} className='text-[14px] min-w-[30vw] mb-4 md:mb-0 px-1 bg-transparent' />

        <div className="mt-5 flex justify-between">

          <button className="px-4 py-1 bg-[#FFA585] text-[#737380] capitalize font-bold rounded">save</button>

          <Link href={'/products'} className="px-4 py-2 bg-[#737380] text-white capitalize font-bold rounded flex gap-1 ">
            <Image width={20} height={20} src={backButton} alt="" className="brightness-[200%] relative top-[2px]" />
            <span>back</span>
          </Link>
        </div>
      </div>
    </form>
  )
}
