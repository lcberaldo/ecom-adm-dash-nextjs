'use client'

import { todoAtom } from '@/atoms/TodoAtom'
import { useAtom } from 'jotai'
import Link from 'next/link'

export default function Content() {

  const [todos, setTodos] = useAtom(todoAtom)

  function handleDelete(id: number) {
    const newList = todos.filter((item) => item.id !== id)
    setTodos(newList)
  }

  return (
    <>
      {
        todos.length > 0
          ? (
            <div className='h-[90%]  p-16   text-[#5d5d6d]'>
              <div className='flex justify-between items-center pr-10 mb-4'>
                <h1 className='text-2xl font-bold pb-5'>Todo Listing</h1>
                <Link className='px-5 py-2 bg-[#ffa585] rounded font-bold' href={'/dashboard/add-todo'}>Add Todo</Link>
              </div>


              <div className='w-full '>
                <header className='flex justify-between bg-[#eef1ef] p-4 rounded-tr rounded-tl  mb-[1px] pr-32'>
                  <strong>Title</strong>
                  <strong>Action</strong>
                </header>

                {
                  todos.map((item, index) =>
                    <div key={item.id} className={`${index === todos.length - 1 && 'rounded-br rounded-bl'} bg-white flex justify-between p-4 gap-4  mb-[1px] pr-32`}>
                      <h3>{item.title}</h3>

                      <div className='gap-2 flex text-[#FFA585]'>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          )
          : (
            <div className="h-[90%]  flex flex-col items-center justify-center">
              <div>
                <h2 className="text-3xl text-[#5d5d6d] font-bold">Add messages here when the list if empty</h2>
              </div>

              <Link href={'/dashboard/add-todo'} className="py-2 px-6 rounded bg-[#FFA585] shadow-2xl text-[#5d5d6d] font-bold mt-7">Add Todo</Link>

            </div>
          )
      }
    </>
  )
}
