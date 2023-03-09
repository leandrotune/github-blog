// import { Controller, useForm } from 'react-hook-form'
// import { InputSearch } from '../../../../components/InputSearch'
// import { Text } from '../../../../components/Text'
// // import { useAllPosts } from '../../../../services/hooks/useAllPosts'

// type FormInputs = {
//   // query?: string
// }

// export function Search() {
//   // const { handleSubmit, control, reset } = useForm()

//   // const query = allPosts()

//   // const total = query.data?.items

//   // function handleSearchPosts(data: FormInputs) {
//   //   useAllPosts(data.query)

//   //   reset()
//   // }

//   return (
//     <form
//       // onSubmit={handleSubmit(handleSearchPosts)}
//       className="mx-auto w-full flex flex-col "
//     >
//       <div className="flex justify-between">
//         <Text asChild size="lg" weight="bold" className="text-gray-200 mb-3">
//           <strong>Publicações</strong>
//         </Text>
//         <Text size="sm" className="text-gray-400">
//           {`${total ? total.length : '0'} publicações`}
//         </Text>
//       </div>

//       <Controller
//         name="query"
//         control={control}
//         defaultValue=""
//         render={({ field }) => (
//           <InputSearch placeholder="Buscar conteúdo" {...field} />
//         )}
//       />
//     </form>
//   )
// }
