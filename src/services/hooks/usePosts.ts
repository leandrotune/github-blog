import { useQuery } from 'react-query'
import { api, username } from '../../api/api'

export interface Posts {
  title: string
  body: string
  created_at: string
  number: number
}

export async function getPosts(): Promise<Posts[]> {
  const { data } = await api.get('/search/issues', {
    params: {
      q: `user:${username}`,
    },
  })
  const posts = data.items.map((item: Posts) => {
    return {
      title: item.title,
      number: item.number,
      body: item.body.substring(0, 181),
      created_at: new Date(item.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    }
  })

  return posts
}

export function usePosts() {
  return useQuery('posts', getPosts, {
    staleTime: 1000 * 5, // secounds
  })
}
