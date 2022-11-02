import { CardPost } from './components/CardPost'
import { Search } from './components/Search'
import { Profile } from './components/Profile/index'
import { useAllPosts } from '../../services/hooks/useAllPosts'
import { Loading } from './components/Loading'

export interface PostProps {
  title: string
  body: string
  created_at: Date | number
  number: number
}

export function Home() {
  const query = useAllPosts()

  return (
    <div className="h-screen ">
      <Profile />
      <main className="max-w-[54rem] mt-[4.5rem] mx-auto">
        <Search />
        <ul className="pb-[234px] mt-12 grid grid-cols-2 gap-8">
          {query.isLoading ? (
            <Loading />
          ) : query.isError ? (
            'Error'
          ) : query.data ? (
            query.data.items.map((item) => (
              <CardPost
                key={item.number}
                title={item.title}
                number={item.number}
                created_at={new Date(item.created_at)}
                body={item.body}
              />
            ))
          ) : null}
        </ul>
      </main>
    </div>
  )
}
