import { InputSearch } from '../../../../components/InputSearch'
import { Text } from '../../../../components/Text'

export function Search() {
  return (
    <div className="mx-auto w-full flex flex-col ">
      <div className="flex justify-between">
        <Text asChild size="lg" weight="bold" className="text-gray-200  mb-3">
          <strong>Publicações</strong>
        </Text>
        <Text size="sm" className="text-gray-400">
          6 publicações
        </Text>
      </div>
      <InputSearch placeholder="Buscar conteúdo" />
    </div>
  )
}
