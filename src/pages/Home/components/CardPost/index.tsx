import { Text } from '../../../../components/Text'
import { Heading } from '../../../../components/Heading'

export function CardPost() {
  return (
    <div className="max-w-[416px] bg-gray-700 rounded-[10px] p-8 border-1  hover:border-blue-500">
      <div className="flex justify-between">
        <Heading asChild size="xl" className="w-[283px]">
          <h2>JavaScript data types and data structures</h2>
        </Heading>

        <Text size="sm">Há 1 dia</Text>
      </div>

      <Text asChild className="mt-6">
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in{' '}
        </p>
      </Text>
    </div>
  )
}
