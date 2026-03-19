import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select'

function BasicSelect({ defaultValue }: { defaultValue?: string }) {
  return (
    <Select defaultValue={defaultValue}>
      <SelectTrigger>
        <SelectValue placeholder="Pick one" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="cherry">Cherry</SelectItem>
      </SelectContent>
    </Select>
  )
}

describe('Select', () => {
  it('renders trigger with placeholder', () => {
    render(<BasicSelect />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByText('Pick one')).toBeInTheDocument()
  })

  it('renders with a default value', () => {
    render(<BasicSelect defaultValue="cherry" />)
    expect(screen.getByText('Cherry')).toBeInTheDocument()
  })

  it('opens the listbox on trigger click', async () => {
    render(<BasicSelect />)
    const trigger = screen.getByRole('combobox')
    await userEvent.click(trigger)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('selects an option on click', async () => {
    render(<BasicSelect />)
    await userEvent.click(screen.getByRole('combobox'))
    const option = screen.getByRole('option', { name: 'Banana' })
    await userEvent.click(option)
    expect(screen.getByText('Banana')).toBeInTheDocument()
  })
})
