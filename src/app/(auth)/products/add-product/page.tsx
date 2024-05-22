import AddForm from "../components/AddForm"
import AsyncImage from "../components/AsyncImage"
import Header from "./../../components/Header"
import image from '@/assets/imgplaceholder.jpg'



export default function AddProduct() {

  return (

    <>
      <Header>
        products / add product
      </Header>

      <main className='md:flex gap-8 items-stretch p-16 '>

        <AsyncImage image_url={image} name={'name'} />

        <div className='text-[#41414D]  max-w-md md:mt-0 mt-3 '>

          <AddForm />

        </div >
      </main >
    </>

  )
}