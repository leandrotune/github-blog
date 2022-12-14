import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layout/DefaultLayout/index'
import { Home } from '../pages/Home'
import { Post } from '../pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/post/*" element={<Post />} />
      </Route>
    </Routes>
  )
}
