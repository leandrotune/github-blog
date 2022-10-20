import { InputHTMLAttributes } from 'react'

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputSearch(props: InputSearchProps) {
  return (
    <input
      type="search"
      className="bg-gray-900 text-gray-300 placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:border-blue-500 rounded-md p-3 px-4 flex flex-1 gap-2"
      {...props}
    />
  )
}
