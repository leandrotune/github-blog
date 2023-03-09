import { PostContent } from './components/PostContent'
import { PostInfo } from './components/PostInfo'

import { useParams } from 'react-router-dom'
// import { useQuery } from 'react-query'
// import { api } from '../../api/api'
import { postData, usePostData } from '../../services/hooks/useLoadPostData'

export function Post() {
  const { id } = useParams()

  postData(id)

  const query = usePostData()

  console.log(query)

  // const { data } = useQuery(
  //   'repos',
  //   async () => {
  //     const response = await api.get(
  //       `repos/leandrotune/github-blog/issues/${id}`,
  //     )

  //     return response.data
  //   },
  //   {
  //     staleTime: 1000 * 60, // 10 minute
  //   },
  // )

  // console.log(data)

  return (
    <div className="max-w-[54rem] mx-auto">
      <PostInfo />
      <PostContent />
    </div>
  )
}
