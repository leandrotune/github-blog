import code from '../../../../assets/code.svg'

import { Text } from '../../../../components/Text'

export function PostContent() {
  return (
    <main className=" py-10 px-8 pb-32">
      <Text asChild>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </p>
      </Text>
      <img src={code} alt="" className="pt-6" />
    </main>
  )
}
