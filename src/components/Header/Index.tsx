import effect1 from '../../../public/assets/effect-1.svg'
import effect2 from '../../../public/assets/effect-2.svg'
import { Logo } from '../../pages/Home/components/Logo'

export function Header() {
  return (
    <header className="flex items-center justify-center bg-gray-700 h-[18.5rem] left-0 right-0 top-0">
      <img className="absolute top-[4.375rem] left-0" src={effect1} alt="" />
      <Logo />
      <img className="absolute top-8 right-0" src={effect2} alt="" />
    </header>
  )
}
