
'use client'

import { todoAtom } from "@/atoms/TodoAtom";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";



export default function Form() {
  const router = useRouter()
  const [todos, setTodos] = useAtom(todoAtom)

  function HandleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const inputValue = e.currentTarget.taskName.value

    const todo = {
      id: todos.length + 1,
      title: inputValue
    }

    setTodos([...todos, todo])

    router.push('/dashboard')
  }

  return (

    <form onSubmit={HandleSubmit} className=' flex gap-5 w-full' >
      <label htmlFor="taskName" className='w-fit text-nowrap pt-1 text-[#5d5d6d]'>
        <span>Todo title:</span>
      </label>

      <div className='flex flex-col gap-9  w-full'>
        <input type="text" name="taskName" id="" className=' bg-gray-200 rounded-sm px-2 py-2' />

        <button
          type='submit'
          className="
            w-40 border-2 border-[#ffa585]  
            text-[#5d5d6d] text-center  
            text-sm bg-[#FFA585] rounded py-2 
            px-4 font-bold uppercase
          "
        >
          Save
        </button>
      </div>
    </form>
  )
}