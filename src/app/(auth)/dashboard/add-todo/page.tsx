import Header from '../../components/Header'
import Link from 'next/link'
import Image from "next/image"
import backButton from '../../../../assets/back-icon.svg'
import Form from '../components/Form'

export default function addTodo() {


  return (
    <>
      <Header>Dashboard / Add Todo</Header>
      <div className='p-16' >
        <div className='w-3/4 bg-white rounded-lg   pl-8 pr-16 pb-10 py-6  '>

          <div className='flex justify-between'>
            <h2 className='font-bold text-[#5d5d6d] text-lg mb-10'>Add a task below</h2>
            <Link href={'/dashboard'}>
              <Image src={backButton} width={40} alt="back arrow" />
            </Link>
          </div>

          <Form />
        </div>
      </div>
    </>
  )
}
