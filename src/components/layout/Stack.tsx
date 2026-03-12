import { forwardRef, type HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const stackVariants = cva('flex', {
  variants: {
    direction: {
      row: 'flex-row',
      column: 'flex-col',
    },
    gap: {
      0: 'gap-0',
      1: 'gap-1',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      6: 'gap-6',
      8: 'gap-8',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
    },
  },
  defaultVariants: {
    direction: 'column',
    gap: 4,
    align: 'stretch',
    justify: 'start',
  },
})

type StackProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof stackVariants>

const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ className, direction, gap, align, justify, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          stackVariants({ direction, gap, align, justify, className }),
        )}
        {...props}
      />
    )
  },
)
Stack.displayName = 'Stack'

export { Stack, stackVariants }
export type { StackProps }
