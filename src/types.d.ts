export type Todo = {
  id: number
  title: string
}

export type Product = {
  // id: number,
  title: string,
  description: string,
  image_url?: string,
  price_in_cents: number,
  category: string

}

export type User = {
  id: number,
  username: string,
  password: string,
  email: string,
  name: string
}



export type SearchParams = {
  searchParams: Record<string, string | string[] | undefined>
}