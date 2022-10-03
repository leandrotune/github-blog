import Logo from '../../../public/assets/logo.svg'
import effect1 from '../../../public/assets/effect-1.svg'
import effect2 from '../../../public/assets/effect-2.svg'

export function Header() {
  return (
    <header className="bg-base-header h-[18.5rem] left-0 right-0 top-0">
      <img className="absolute top-[4.375rem] left-0" src={effect1} alt="" />
      <img className="mx-auto pt-16" src={Logo} alt="Logo do GitHub Blog" />
      <img className="absolute top-8 right-0" src={effect2} alt="" />
    </header>
  )
}
