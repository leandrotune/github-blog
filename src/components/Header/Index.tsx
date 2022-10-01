import Logo from '/public/assets/logo.svg';
import effect1 from '/assets/effect-1.svg';
import effect2 from '/assets/effect-2.svg';

export function Header() {
  return(
    <header className="bg-base-profile h-[18.5rem]  left-0 right-0 top-0">
      <img className='absolute top-[4.375rem] left-0' src={effect1} alt="" />
      <img className='mx-auto pt-16' src={Logo} alt="Logo do GitHub Blog" />
      <img  src={effect2} className='absolute top-8 right-0' alt="" />
    </header>
  )
}