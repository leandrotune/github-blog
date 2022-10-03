import { CardPost } from '../../components/CardPost'
import { Profile } from '../../components/Profile'
import { Search } from '../../components/Search'

export function Home() {
  return (
    <div className="h-screen ">
      <Profile />
      <main className="max-w-[54rem] mt-[4.5rem] mx-auto">
        <Search />
        <ul className="mb-[234px] mt-12 grid grid-cols-2 gap-8">
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
