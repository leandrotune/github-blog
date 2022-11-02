import { InputSearch } from '../../../../components/InputSearch'
import { Text } from '../../../../components/Text'
import { useAllPosts } from '../../../../services/hooks/useAllPosts'

export function Search() {
  const query = useAllPosts()

  const total = query.data?.items

  return (
    <div className="mx-auto w-full flex flex-col ">
      <div className="flex justify-between">
        <Text asChild size="lg" weight="bold" className="text-gray-200  mb-3">
          <strong>Publicações</strong>
        </Text>
        <Text size="sm" className="text-gray-400">
          {`${total ? total.length : '0'} publicações`}
        </Text>
      </div>
      <InputSearch placeholder="Buscar conteúdo" />
    </div>
  )
}
