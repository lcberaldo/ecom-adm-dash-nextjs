import Header from "../../../components/Header"
import { getProductById } from "@/actions/loggedActions"
import EditForm from "../../components/EditForm"


type paramsProps = {
  params: {
    id: string
  }
}

export default async function EditProduct({ params }: paramsProps) {

  const product = await getProductById(Number(params.id))

  if (!product) return null

  const price = (product.price_in_cents / 100).toLocaleString('pt-BR', { style: "currency", currency: "BRL" })


  return (

    <>
      <Header>
        products / edit product
      </Header>

      <main className=' p-16 '>

        <EditForm product={product} />


      </main>
    </>

  )
}