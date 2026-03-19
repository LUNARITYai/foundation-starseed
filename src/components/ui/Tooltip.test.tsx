import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'

function BasicTooltip({ open }: { open?: boolean }) {
  return (
    <TooltipProvider>
      <Tooltip open={open}>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent forceMount>Tooltip text</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

describe('Tooltip', () => {
  it('renders the trigger', () => {
    render(<BasicTooltip />)
    expect(screen.getByText('Hover me')).toBeInTheDocument()
  })

  it('content has closed state when not open', () => {
    render(<BasicTooltip open={false} />)
    // Radix renders the content div with data-state="closed" when forceMount is set
    const tooltip = screen.getByRole('tooltip', { hidden: true })
    expect(tooltip).toBeInTheDocument()
    // The parent content wrapper will have data-state="closed"
    const contentWrapper = tooltip.closest('[data-state]')
    expect(contentWrapper).toHaveAttribute('data-state', 'closed')
  })

  it('content has open state when open', () => {
    render(<BasicTooltip open={true} />)
    const tooltip = screen.getByRole('tooltip', { hidden: true })
    const contentWrapper = tooltip.closest('[data-state]')
    // Radix uses "instant-open" or "open" state depending on delayDuration
    expect(contentWrapper?.getAttribute('data-state')).toMatch(/open/)
  })
})
