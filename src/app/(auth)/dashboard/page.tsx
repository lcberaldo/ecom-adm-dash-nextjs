
import { SearchParams } from "@/types";
import Header from "../components/Header";
import Content from "./components/Content";


// export async function getPosts({ searchParams }: SearchParams) {

//   // const response = await fetch(process.env.URL + '/api/posts', { cache: "no-store" })

//   const data = await response.json()

//   const page = searchParams['page'] ?? '1'

//   const pageSize = 9;
//   const pagesCount = Math.ceil(data.length / pageSize);

//   const start = (Number(page) - 1) * pageSize
//   const end = start + pageSize

//   const entries = data.reverse().slice(start, end)

//   return { entries, pagesCount, start, end, lenght: data.length }
// }

export default async function Dashboard() {


  return (
    <>
      <Header>Dashboard</Header>
      <Content />
    </>
  );

}
