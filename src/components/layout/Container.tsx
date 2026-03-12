import { forwardRef, type HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const containerVariants = cva('mx-auto w-full px-4', {
  variants: {
    maxWidth: {
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-screen-xl',
      '2xl': 'max-w-screen-2xl',
      full: 'max-w-full',
    },
  },
  defaultVariants: {
    maxWidth: 'xl',
  },
})

type ContainerProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof containerVariants>

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, maxWidth, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(containerVariants({ maxWidth, className }))}
        {...props}
      />
    )
  },
)
Container.displayName = 'Container'

export { Container, containerVariants }
export type { ContainerProps }
