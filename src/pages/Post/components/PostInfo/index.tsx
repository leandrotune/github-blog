import {
  faArrowUpRightFromSquare,
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'

import { Heading } from '../../../../components/Heading'
import { Text } from '../../../../components/Text'

export function PostInfo() {
  return (
    <header className="bg-gray-800 p-8 mt-[-5.438rem] rounded-[10px]">
      <nav className="flex justify-between">
        <NavLink
          to="/"
          className="text-blue-500 flex items-center gap-2 text-sm font-bold hover:cursor-pointer"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          voltar
        </NavLink>
        <a
          href="#"
          className="text-blue-500 flex items-center gap-2 text-sm font-bold hover:cursor-pointer hover:underline"
        >
          ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </nav>

      <Heading className="pt-5">
        JavaScript data types and data structures
      </Heading>

      <ul className="pt-2 flex  gap-8">
        <li className="flex items-center gap-2 ">
          <FontAwesomeIcon icon={faGithub} className="text-gray-500" />
          <Text className="text-gray-400">cameronwll</Text>
        </li>

        <li className="flex items-center gap-2 ">
          <FontAwesomeIcon icon={faCalendar} className="text-gray-500" />
          <Text className="text-gray-400">Há 1 dia</Text>
        </li>

        <li className="flex items-center gap-2">
          <FontAwesomeIcon icon={faComment} className="text-gray-500" />
          <Text className="text-gray-400">5 comentários</Text>
        </li>
      </ul>
    </header>
  )
}
