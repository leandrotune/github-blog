import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

import { Text } from '../../../../components/Text'

import { useQuery } from 'react-query'
import axios from 'axios'
import { Heading } from '../../../../components/Heading'

interface ProfileProps {
  id: string
  name: string
  avatar: string
  bio: string
}

export function Profile() {
  const { data: profile } = useQuery<ProfileProps>('profile', async () => {
    const response = await axios.get('https://api.github.com/users/leandrotune')
    console.log(response.data)
    return response.data
  })

  return (
    <div
      key={profile?.id}
      className="max-w-[54rem] mt-[-5.438rem] h-[212px] bg-gray-800 flex items-center justify-evenly mx-auto rounded-[10px]"
    >
      <div>
        <img className="w-[148px] h-[148px]" src={profile?.avatar} alt="" />
      </div>

      <div className="w-[38.25rem] h-[140px] flex flex-col justify-between">
        <div className="w-full flex justify-between">
          <Heading>{profile?.name}</Heading>
          <Text
            asChild
            className="text-blue-500 font-bold flex gap-2 items-center hover:cursor-pointer hover:underline"
          >
            <a href="#">
              github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </Text>
        </div>
        <Text asChild>
          <p className="text-base-text font-normal text-base">{profile?.bio}</p>
        </Text>
        <ul className="flex gap-6">
          <li className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faGithub} />
            <Text>leandro</Text>
          </li>
          <li className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faBuilding} />
            <Text>Rocketseat</Text>
          </li>
          <li className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faUserGroup} />
            <Text>32 seguidores</Text>
          </li>
        </ul>
      </div>
    </div>
  )
}
