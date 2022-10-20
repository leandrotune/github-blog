import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

interface TextProps {
  size?: 'sm' | 'md' | 'lg'
  weight?: 'normal' | 'semibold' | 'bold'
  children: ReactNode
  asChild?: boolean
  className?: string
}

export function Text({
  children,
  size = 'md',
  asChild,
  className,
  weight = 'normal',
}: TextProps) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      className={clsx(
        'text-gray-300 font-sans',
        {
          'text-sm': size === 'sm',
          'text-md': size === 'md',
          'text-lg': size === 'lg',
        },
        {
          'font-normal': weight === 'normal',
          'font-semibold': weight === 'semibold',
          'font-bold': weight === 'bold',
        },
        className,
      )}
    >
      {children}
    </Comp>
  )
}
