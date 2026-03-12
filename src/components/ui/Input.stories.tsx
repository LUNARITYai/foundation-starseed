import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './Input'

const meta = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { placeholder: 'Enter text...' },
}

export const Disabled: Story = {
  args: { placeholder: 'Disabled', disabled: true },
}

export const WithType: Story = {
  args: { type: 'email', placeholder: 'email@example.com' },
}
