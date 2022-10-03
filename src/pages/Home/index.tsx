import { Profile } from '../../components/Profile'
import { Search } from '../../components/Search'

export function Home() {
  return (
    <div className="h-screen ">
      <Profile />
      <main className="max-w-[54rem] mt-[4.5rem] mx-auto">
        <Search />
      </main>
    </div>
  )
}
