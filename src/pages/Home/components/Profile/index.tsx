import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

import { Text } from '../../../../components/Text'
import { Heading } from '../../../../components/Heading'
import { Loading } from '../Loading'
import { useDataProfile } from '../../../../services/hooks/useDataProfile'

export function Profile() {
  const { isLoading, error, data } = useDataProfile()

  if (isLoading) return <Loading />

  if (error)
    return (
      <Heading className="flex justify-center">
        Não Foi possível carregar a página
      </Heading>
    )

  return (
    <div
      key={data?.id}
      className="max-w-[54rem] mt-[-5.438rem] h-[212px] bg-gray-800 flex items-center justify-evenly mx-auto rounded-[10px]"
    >
      <div>
        <img className="w-[148px] h-[148px]" src={data?.avatar_url} alt="" />
      </div>

      <div className="w-[38.25rem] h-[140px] flex flex-col justify-between">
        <div className="w-full flex justify-between">
          <Heading>{data?.name}</Heading>
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
          <p className="text-base-text font-normal text-base">{data?.bio}</p>
        </Text>
        <ul className="flex gap-6">
          <li className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faGithub} className="text-gray-500" />
            <Text>{data?.login}</Text>
          </li>

          <li className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faUserGroup} className="text-gray-500" />
            <Text>{`${data?.followers} seguidores`} </Text>
          </li>
        </ul>
      </div>
    </div>
  )
}
