import React from 'react'
import Header from '../components/Header'
import Link from 'next/link'
import Image from 'next/image'

import placeholderImg from '@/assets/imgplaceholder.jpg'
import { deleteById, getAllProducts } from '@/actions/loggedActions'
import DeleteButton from './components/DeleteButton'

export default async function Products() {

  const products = await getAllProducts()

  if (!products) return null

  return (
    <>
      <Header>
        Products
      </Header >

      <div className='h-[90%]  p-16   text-[#5d5d6d]'>
        <div className='flex justify-between items-center pr-10 mb-4'>
          <h1 className='text-2xl font-bold pb-5'>Catalogue</h1>
          <Link className='px-5 py-2 bg-[#ffa585] rounded font-bold' href={'/products/add-product'}>Add Product</Link>
        </div>


        <table className='w-full '>
          <thead >
            <tr className='grid grid-cols-9   bg-[#eef1ef]  p-4 rounded-tr rounded-tl mb-[2px] '>
              <td className=''><strong>Thumb</strong></td>
              <td className='col-span-6'><strong>Title</strong></td>
              <td><strong>Price</strong></td>
              <td><strong>Action</strong></td>
            </tr>
          </thead>

          <tbody >

            {products.map(product => {
              const price = (product.price_in_cents / 100).toLocaleString('pt-BR', { style: "currency", currency: "BRL" })




              return (
                <tr key={product.id}>
                  <div className='grid grid-cols-9 bg-white p-4 mb-[2px]' >
                    <td className=''>
                      <Image alt='' src={product.image_url || placeholderImg} width={60} height={70} />
                    </td>

                    <td className='col-span-6 flex items-center font-semibold text-xl'>
                      <span>{product.title}</span>
                    </td>

                    <td className='flex items-center font-semibold'>
                      <span>{price}</span>
                    </td>

                    <td className='flex gap-2 items-center'>
                      <DeleteButton id={product.id} />
                      <span>/</span>
                      <Link href={`/products/${product.id}/edit-product`}>Edit</Link>
                    </td>
                  </div>
                </tr>
              )
            })}

          </tbody>

        </table>

      </div >
    </>
  )
}
