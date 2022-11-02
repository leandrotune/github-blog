import { Text } from '../../../../components/Text'
import { Heading } from '../../../../components/Heading'
import { PostProps } from '../..'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { NavLink } from 'react-router-dom'

export function CardPost({ number, title, created_at, body }: PostProps) {
  const publishedDateRelativeToNow = formatDistanceToNow(new Date(created_at), {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <div>
      <NavLink to={`/post/${number}`}>
        <div
          key={number}
          className="max-w-[416px] bg-gray-700 rounded-[10px] p-8 border-2 border-transparent hover:border-gray-500"
        >
          <div className="flex justify-between">
            <Heading asChild size="xl" className="w-[283px]">
              <h2>{title}</h2>
            </Heading>

            <Text size="sm">{publishedDateRelativeToNow}</Text>
          </div>

          <Text asChild className="mt-6">
            <p>{body}</p>
          </Text>
        </div>
      </NavLink>
    </div>
  )
}
