// import axios from 'axios'
// import { useQuery } from 'react-query'
import { CardPost } from './components/CardPost'
import { Profile } from './components/Profile'
import { Search } from './components/Search'

export interface Repository {
  full_name: string
  description: string
}

export function Home() {
  // const { data } = useQuery<Repository[]>('repos', async () => {
  //   const response = await axios.get('https://api.github.com/users/leandrotune')
  //   return response.data
  // })

  // console.log(data)

  return (
    <div className="h-screen ">
      <Profile />
      <main className="max-w-[54rem] mt-[4.5rem] mx-auto">
        <Search />
        <ul className="pb-[234px] mt-12 grid grid-cols-2 gap-8">
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
        </ul>
      </main>
    </div>
  )
}
