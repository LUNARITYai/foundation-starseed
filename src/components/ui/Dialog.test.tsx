import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './dialog'

function BasicDialog() {
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogDescription>Dialog description text.</DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

describe('Dialog', () => {
  it('does not show content initially', () => {
    render(<BasicDialog />)
    expect(screen.queryByText('Dialog Title')).not.toBeInTheDocument()
  })

  it('shows content when trigger is clicked', async () => {
    render(<BasicDialog />)
    await userEvent.click(screen.getByText('Open'))
    expect(screen.getByText('Dialog Title')).toBeInTheDocument()
    expect(screen.getByText('Dialog description text.')).toBeInTheDocument()
  })

  it('closes when the close button is clicked', async () => {
    render(<BasicDialog />)
    await userEvent.click(screen.getByText('Open'))
    expect(screen.getByText('Dialog Title')).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: /close/i }))
    expect(screen.queryByText('Dialog Title')).not.toBeInTheDocument()
  })
})
