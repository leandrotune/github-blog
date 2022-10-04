import {
  faArrowUpRightFromSquare,
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function PostInfo() {
  return (
    <header className="bg-base-profile p-8 mt-[-5.438rem] rounded-[10px]">
      <nav className="flex justify-between">
        <span className="text-blue flex items-center gap-2 text-sm font-bold hover:cursor-pointer">
          <FontAwesomeIcon icon={faChevronLeft} />
          voltar
        </span>
        <span className="text-blue flex items-center gap-2 text-sm font-bold hover:cursor-pointer">
          ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </span>
      </nav>
      <h1 className="pt-5 text-base-title font-bold text-2xl">
        JavaScript data types and data structures
      </h1>
      <ul className="pt-2 flex  gap-8">
        <li className="flex items-center gap-2 text-base-span">
          <FontAwesomeIcon icon={faGithub} />
          cameronwll
        </li>
        <li className="flex items-center gap-2 text-base-span">
          <FontAwesomeIcon icon={faCalendar} />
          Há 1 dia
        </li>
        <li className="flex items-center gap-2 text-base-span">
          <FontAwesomeIcon icon={faComment} />5 comentários
        </li>
      </ul>
    </header>
  )
}
