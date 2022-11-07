import { CardPost } from './components/CardPost'
// import { Search } from './components/Search'
import { Profile } from './components/Profile/index'
// import { useAllPosts, Items } from '../../services/hooks/useAllPosts';
// import { Loading } from './components/Loading'
// import { useCallback, useEffect } from 'react'
// import { api } from '../../api/api'

export function Home() {
  return (
    <div className="h-screen ">
      <Profile />
      <main className="max-w-[54rem] mt-[4.5rem] mx-auto">
        {/* <Search /> */}
        <ul className="pb-[234px] mt-12 grid grid-cols-2 gap-8">
          <CardPost />
        </ul>
      </main>
    </div>
  )
}
