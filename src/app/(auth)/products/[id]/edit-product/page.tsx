import AsyncImage from "../../components/AsyncImage"
import Header from "../../../components/Header"
import image from '@/assets/imgplaceholder.jpg'
import Link from "next/link"
import Image from "next/image"
import backButton from '@/assets/back-icon.svg'


export default async function EditProduct() {

  return (

    <>
      <Header>
        <h1>products / edit product</h1>
      </Header>

      <main className='md:flex gap-8 items-stretch p-16 '>

        <AsyncImage image_url={image} name={'name'} />

        <div className='text-[#41414D]  max-w-md md:mt-0 mt-3 '>

          <form action="" className=" flex-col flex">
            <input type="text" name="category" className='block mb-3 px-1 bg-transparent ' value={'teste'} />

            <input type="text" name="title" className='text-3xl font-light mb-3 bg-transparent px-1' value={'produto 1'} />

            <input type="text" name="price" className='text-[#09090A] font-semibold mb-6 px-1 bg-transparent' value={'R$ 49,90'} />


            <span className='block uppercase font-medium text-[#737380] mb-2'>descrição</span>

            <textarea name="description" rows={6} value={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, aspernatur nobis? Sapiente amet nihil dignissimos provident placeat, natus rem eum maxime itaque necessitatibus laborum ab, veritatis molestias ad eaque reprehenderit!'} className='text-[14px] min-w-[30vw] mb-4 md:mb-0 px-1 bg-transparent' />

            <div className="mt-5 flex justify-between">

              <button className="px-4 py-1 bg-[#FFA585] text-[#737380] capitalize font-bold rounded">save</button>

              <Link href={'/products'} className="px-4 py-2 bg-[#737380] text-white capitalize font-bold rounded flex gap-1 ">
                <Image width={20} height={20} src={backButton} alt="" className="brightness-[200%] relative top-[2px]" />
                <span>back</span>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>

  )
}