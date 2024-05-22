'use client'

import { deleteById } from '@/actions/loggedActions'
import { useRouter } from 'next/navigation'

type DeleteButtonProps = {
  id: number
}


export default function DeleteButton({ id }: DeleteButtonProps) {
  const router = useRouter()


  async function handleDelete() {
    const deletedProduct = await deleteById(id)

    router.refresh();
  }


  return (
    <button onClick={handleDelete}>Delete</button>
  )
}
