import { useQuery } from 'react-query'
import { api, repoName, username } from '../../api/api'

export interface Post {
  title: string
  body: string
  created_at: string
  number: number
}

export async function postData(id: unknown) {
  const { data } = await api.get(`repos/${username}/${repoName}/issues/${id}`)
  return data
}

export function usePostData() {
  return useQuery('postData', postData, {
    staleTime: 1000 * 5, // secounds
  })
}
