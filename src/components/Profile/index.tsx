import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

import avatar from '../../../public/assets/avatar.svg'

export function Profile() {
  return (
    <div className="max-w-[54rem] mt-[-5.438rem] h-[212px] bg-base-profile flex items-center justify-evenly mx-auto rounded-[10px]">
      <div>
        <img className="w-[148px] h-[148px]" src={avatar} alt="" />
      </div>

      <div className="w-[38.25rem] h-[140px] flex flex-col justify-between">
        <div className="w-full flex justify-between">
          <h1 className="text-base-title text-2xl font-Nubito font-bold">
            Cameron Williamson
          </h1>

          <a
            href="#"
            className="flex gap-2 items-center text-blue hover:cursor-pointer"
          >
            github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <div>
          <p className="text-base-text font-normal text-base">
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </div>
        <ul className="flex gap-6">
          <li className=" flex gap-2 items-center text-base-subtitle">
            <FontAwesomeIcon icon={faGithub} />
            leandro
          </li>
          <li className=" flex gap-2 items-center text-base-subtitle">
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </li>
          <li className=" flex gap-2 items-center text-base-subtitle">
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </li>
        </ul>
      </div>
    </div>
  )
}
