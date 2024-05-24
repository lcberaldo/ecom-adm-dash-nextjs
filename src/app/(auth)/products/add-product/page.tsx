import AddForm from "../components/AddForm"
import Header from "./../../components/Header"



export default function AddProduct() {

  return (

    <>
      <Header>
        products / add product
      </Header>

      <main className='md:flex gap-8 items-stretch p-16 '>

        <AddForm />

      </main >
    </>

  )
}