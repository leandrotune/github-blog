import { Text } from '../../../../components/Text'
import { Heading } from '../../../../components/Heading'
// import { formatDistanceToNow } from 'date-fns'
// import { ptBR } from 'date-fns/locale'
import { NavLink } from 'react-router-dom'
import { usePosts } from '../../../../services/hooks/usePosts'

export function CardPost() {
  const { data } = usePosts()

  return (
    <>
      {data?.map((post) => {
        return (
          <NavLink key={post?.number} to={`/post/${post?.number}`}>
            <div>
              <div
                key={post?.number}
                className="max-w-[416px] bg-gray-700 rounded-[10px] p-8 border-2 border-transparent hover:border-gray-500"
              >
                <div className="flex justify-between">
                  <Heading asChild size="xl" className="w-[283px]">
                    <h2>{post?.title}</h2>
                  </Heading>

                  <Text size="sm">{post.created_at}</Text>
                </div>

                <Text asChild className="mt-6">
                  <p>{post?.body}</p>
                </Text>
              </div>
            </div>
          </NavLink>
        )
      })}
    </>
  )
}
