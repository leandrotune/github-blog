import { useQuery } from 'react-query'
import { api } from '../../api/api'

export interface DataProfile {
  id: string
  name: string
  avatar_url: string
  bio: string
  login: string
  followers: string
}

export function useDataProfile() {
  return useQuery<DataProfile>(
    'profile',
    async () => {
      const { data } = await api.get('users/leandrotune')

      return data
    },
    {
      staleTime: 1000 * 5, // 5 seconds
    },
  )
}
