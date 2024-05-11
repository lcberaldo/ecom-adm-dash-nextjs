import React from 'react'
import Header from '../components/Header'
import Link from 'next/link'
import Image from 'next/image'

import placeholderImg from '@/assets/imgplaceholder.jpg'

export default function Members() {
  return (
    <>
      <Header><h1>Members</h1></Header>

      <div className='h-[90%]  p-16   text-[#5d5d6d]'>

        <h1 className='text-xl font-bold pb-5'>Team members</h1>


        <table className='w-full '>
          <thead >
            <tr className='grid grid-cols-8  bg-[#eef1ef]  p-4 rounded-tr rounded-tl mb-[2px] '>
              <td className='col-span-6'><strong>E-mail</strong></td>
              <td><strong>Role</strong></td>
              <td><strong>Action</strong></td>
            </tr>
          </thead>

          <tbody >



            <tr >
              <Link className='grid grid-cols-8 bg-white p-4 mb-[2px]' href={`/products/djhsakhdjh/edit-product`}>
                <td className='col-span-6 flex items-center font-semibold text-xl'>
                  <span>lcberaldo@hotmail.com</span>
                </td>

                <td className='flex items-center font-semibold'>
                  <span>Owner</span>
                </td>

                <td className='flex gap-2 items-center'>
                  <button>Delete</button>
                  <span>/</span>
                  <button>Edit</button>
                </td>
              </Link>
            </tr>
          </tbody>

        </table>

        <div>
          <div className='flex mt-14 mb-5' >
            <h1 className='text-xl font-bold '>Pending invites</h1>

            <Link className='px-5 ml-auto mr-0 block w-fit py-2 bg-[#ffa585] rounded font-bold' href={''}>Invite member</Link>

          </div>

          <table className='w-full '>
            <thead >
              <tr className='grid grid-cols-8  bg-[#eef1ef]  p-4 rounded-tr rounded-tl mb-[2px] '>
                <td className='col-span-6'><strong>E-mail</strong></td>
                <td><strong>Role</strong></td>
                <td><strong>Action</strong></td>
              </tr>
            </thead>

            <tbody >


              <tr className=' bg-gray-200'>
                <td className=' p-4 rounded-bl rounded-br italic' >
                  <span>There are no pending invitation.</span>
                </td>
              </tr>

              {/* <tr >
                <Link className='grid grid-cols-8 bg-white p-4 mb-[2px]' href={`/products/djhsakhdjh/edit-product`}>
                  <td className='col-span-6 flex items-center font-semibold text-xl'>
                    <span>lcberaldo@hotmail.com</span>
                  </td>

                  <td className='flex items-center font-semibold'>
                    <span>Owner</span>
                  </td>

                  <td className='flex gap-2 items-center'>
                  <button>Delete</button>
                  <span>/</span>
                  <button>Edit</button>
                </td>
                </Link>
              </tr> */}
            </tbody>

          </table>
        </div>
      </div >
    </>
  )
}
