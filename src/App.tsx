import { BrowserRouter } from 'react-router-dom'
import { Router } from './Routes/Router'
import './styles/main.css'

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
