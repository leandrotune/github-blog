import { useQuery } from 'react-query'
import { api, username } from '../../api/api'

export interface Items {
  title: string
  body: string
  created_at: string
  number: number
  total_count?: number
}

export interface Data {
  items: Items[]
}

export function useAllPosts() {
  return useQuery(
    'post',
    async () => {
      const { data } = await api.get<Data>(
        'https://api.github.com/search/issues',
        {
          params: {
            q: `user:${username}`,
          },
        },
      )
      return data
    },
    {
      staleTime: 1000 * 5,
    },
  )
}
