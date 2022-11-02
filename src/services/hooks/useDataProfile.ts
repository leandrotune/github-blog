import { useQuery } from 'react-query'
import { api, username } from '../../api/api'

export interface DataProfile {
  id: string
  name: string
  avatar_url: string
  bio: string
  login: string
  followers: string
}

export function useDataProfile() {
  return useQuery(
    'profile',
    async () => {
      const { data } = await api.get<DataProfile>(`users/${username}`)

      return data
    },
    {
      staleTime: 1000 * 5, // 5 seconds
    },
  )
}
