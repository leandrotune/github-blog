import { PostContent } from './components/PostContent'
import { PostInfo } from './components/PostInfo'
import { useQuery } from 'react-query'
import { api, repoName, username } from '../../api/api'
import { useParams } from 'react-router-dom'

export function Post() {
  const number = useParams()

  console.log(number)

  const { data } = useQuery('post', async () => {
    const response = await api.get(`/repos/${username}/${repoName}/${number}`)
  })

  return (
    <div className="max-w-[54rem] mx-auto">
      <PostInfo />
      <PostContent />
    </div>
  )
}
