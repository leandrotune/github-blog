import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

interface HeadingProps {
  size?: 'xl' | '2xl'
  asChild?: boolean
  children: ReactNode
  className?: string
}

export function Heading({
  size = '2xl',
  children,
  asChild,
  className,
}: HeadingProps) {
  const Comp = asChild ? Slot : 'h1'

  return (
    <Comp
      className={clsx(
        'text-gray-100 font-bold',
        {
          'text-xl': size === 'xl',
          'text-2xl': size === '2xl',
        },
        className,
      )}
    >
      {children}
    </Comp>
  )
}
