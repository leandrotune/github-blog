import { Routes, Route } from 'react-router-dom'
import { Profile } from '../components/Profile'
import { DefaultLayout } from '../layout/DefaultLayout/index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Profile />} />
      </Route>
    </Routes>
  )
}
